import React from 'react'
import ExploreCard from '../components/ExploreCard'
import Header from '../components/Header'
import SimpleSlider from '../components/Slider'

function Home() {
  return (
    <div>
      <Header first = 'Liberty NFT Market'
      title = 'CREATE, SELL & COLLECT TOP NFT’S'
      />
     <SimpleSlider/>
      <ExploreCard/>
    </div>
  )
}

export default Home