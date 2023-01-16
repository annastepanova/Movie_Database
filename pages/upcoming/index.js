import api from '../../services/configureApi'
import Meta from '../../components/Meta'
import MovieList from '../../components/MovieList'

import styles from '../../styles/MovieList.module.css'

export default function Upcoming({ upcoming, config }) {
  return (
    <>
      <Meta title='Upcoming movies' />
      <h1 className={styles.title}>Upcoming movies</h1>
      <MovieList movies={upcoming} config={config}/>
    </>
  )
}

export const getStaticProps = async () => {
  const upcoming = await api.getUpcomingMovies()

  return {
    props: {
      upcoming
    }
  }
}
