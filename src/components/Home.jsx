import React from 'react'
import Banner from "./carousel/Banner"
import FeatureProduct from './FeatureProduct'
import Services from './Services'
const Home = ({list}) => {
  return (
    <>
   
    <Banner/>
    <Services/>
    <FeatureProduct list={list}/>
    </>
    
    
  )
}

export default Home