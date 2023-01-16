import api from '../services/configureApi'
import Meta from '../components/Meta'
import MovieList from '../components/MovieList'

import styles from '../styles/MovieList.module.css'

export default function Home ({ movies, config }) {
  return (
    <>
      <Meta title='New movies 2022' />
      <h1 className={styles.title}>Latest movies</h1>
      <MovieList movies={movies} config={config}/>
    </>
  )
}

export const getStaticProps = async () => {
  const movies = await api.getLatestMovies()

  return {
    props: {
      movies
    }
  }
}
