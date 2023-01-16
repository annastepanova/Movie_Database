import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MovieList.module.css'

const MovieList = ({ movies, config }) => {
  const { secure_base_url, backdrop_sizes } = config.images || {}

  const movieList = movies.map(movie => (
    <Link key={movie.id} href={`/movie/${movie.id}`}>
      <div className={styles.card}>
        <Image 
          alt='poster' 
          src={secure_base_url + backdrop_sizes[0] + movie.poster_path} 
          layout='responsive'
          width={240}
          height={360}
          className={styles.image}
        />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  ))
  return (
    <div className={styles.container}>
      {movieList}
    </div>
  )
}

export default MovieList
