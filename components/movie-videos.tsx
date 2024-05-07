import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id: string) {
    const resp = await fetch(`${API_URL}/${id}/videos`);
    return resp.json();
}

export default async function MovieVideos({id}:{id:string}) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            { videos.map((it:any) => 
                <iframe key={it.id} src={`https://youtube.com/embed/${it.key}`} title={it.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}