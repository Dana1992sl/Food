import React, { useState } from 'react'
import AppDownload from '../../Components/Appdownload/Appdownload'
import ExploreMenu from '../../Components/ExplorMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Header from '../../Components/Header'
import './Home.css'

const Home = () => {
    const [category, setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} setCategory={setCategory}/>
    <AppDownload/>
      
    </div>
  )
}

export default Home
