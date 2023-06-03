import React, { useEffect } from 'react'
import HeroBanner from './herobanner/HeroBanner'
import './styles.scss'
import CarouselContainer from './carouselContainer/CarouselContainer'
const Home = () => {
  useEffect(() => {
    document.title = 'MovieX😊'
  }, [])
  return (
    <div className='homepage' >
      <HeroBanner />
      {/* For Trending Section*/}
      <CarouselContainer dataArray={['day', 'week']} crouselTitle={'Trending'} end={'trending'} />
      {/* For Popular section */}
      <CarouselContainer dataArray={['movie', 'tv shows']} crouselTitle={"What's Popular"} end={'popular'} />
      {/* for topRated Sections */}
      <CarouselContainer dataArray={['movie', 'tv shows']} crouselTitle={"Top Rated"} end={'top_rated'} />
      {/* <div style={{ height: '1000px' }}></div> */}
    </div>
  )
}

export default Home
