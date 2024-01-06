import React from 'react'
import Lottie from "lottie-react";
import anime from "../source/anime.json"
const Home = () => {
    return (
        <div className='master'>
            <div className='left'>
                <span className='one'>HELLO.............</span>
                <span className='two'>I am Vimal Bhesaniya</span>
                <span className='three'>React Js. Developer</span>
                <div className='doFlex'>
                    <button>hire me</button>
                    <button>get cv </button>
                </div>
            </div>
            <div className='right'>
                <Lottie animationData={anime} loop={true} width={100} />
            </div>
        </div>
    )
}

export default Home