import styles from '../styles/Movie.module.css'

const Review = ({ reviews }) => {
  return (
    <>
      {reviews.map(review => {
      const date = new Date(review.created_at).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }) 
      return (
         <div key={review.id} className={styles.review_item}>
           <p>{review.author_details.username}</p>
           <p>{date}</p>
           <div>
           <p key={review.id}>{review.content}</p>
           </div>
         </div>
      )})}
    </>
  )
}

export default Review
