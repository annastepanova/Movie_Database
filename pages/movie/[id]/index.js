import Link from 'next/link'
import Image from 'next/image'
import api from '../../../services/configureApi'
import Meta from '../../../components/Meta'

import styles from '../../../styles/Movie.module.css'

const Movie = ({ config, movie }) => {
  const { secure_base_url, backdrop_sizes } = config.images || {}

  return (
    <>
     <Meta title={movie.title} description={movie.overview}/>
        <div className={styles.section_container}>
          <div className={styles.image_container}>
            <Image 
              alt='backdrop' 
              src={secure_base_url + backdrop_sizes[1] + movie.backdrop_path} 
              layout='responsive'
              width={750}
              height={400}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.description}>
            <h1>{movie.title}</h1>
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <p>{movie.overview}</p>
          </div>
          <div className={styles.movie_links}>
            <Link href='/'>Go Back</Link>
            <Link href={`${movie.id}/reviews`}>Reviews</Link>
          </div>
        </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const movie = await api.getMovieDetails(context.params.id)

  return {
    props: {
      movie
    }
  }
}

export const getStaticPaths = async () => {
  const movies = await api.getLatestMovies()
  const upcoming = await api.getUpcomingMovies()
  const allMovies = [...new Set([...movies, ...upcoming])]
  
  const ids = allMovies.map((movie) => movie.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Movie
