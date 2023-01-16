import Meta from '../components/Meta'
import React from 'react'
import styles from '../styles/MovieList.module.css'

export default function About () {

  return (
    <>
      <Meta title='About Movie DB' />
      <h4 className={styles.title}>The TMBD Advantage</h4>
      <div className={styles.wrapper}>
        <div>
          <div>1</div>
          <p>Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, TMDB has become a premiere source for metadata.</p>
        </div>
        <div>
          <div>2</div>
          <p>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</p>
        </div>
        <div>
          <div>3</div>
          <p>We are international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.</p>
        </div>
      </div>
    </>
  )
}
