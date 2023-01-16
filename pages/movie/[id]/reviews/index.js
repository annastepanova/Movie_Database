import Link from 'next/link'
import api from '../../../../services/configureApi'
import Review from '../../../../components/Review'
import styles from '../../../../styles/Movie.module.css'

export default function Reviews ({ reviews, id }) {

  return (
    <>
      <div className={styles.review_container}>
        {reviews.length > 0 ? <Review reviews={reviews}/> : 
        <div>
          <h3>No review available</h3>
        </div>
        }
        <div className={styles.movie_links}>
          <Link href={`/movie/${id}`}>Go Back</Link>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from API
  const { results, id } = await api.getReviews(context.query.id)

  // Pass data to the page via props
  return { props: { reviews: results, id } }
}
