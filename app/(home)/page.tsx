import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";

export const metadata = {
    title: "Home",
}

async function getMovies() {
    const resp = await fetch(API_URL);
    const json = resp.json();

    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    
    return (
        <div className={styles.container}>
            { movies.map((it:any) => (
                <Movie 
                key={it.id}
                id={it.id}
                poster_path={it.poster_path}
                title={it.title} />
            )) }
        </div>
    )
}