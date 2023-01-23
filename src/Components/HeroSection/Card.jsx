import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <>
    <div className="card-main-cont">
        <div className="card-first-div">
        <h6>Flash Pick of the day</h6>
        <p>View all</p>
        </div>
        <div className="card-img">
            <img src="https://i5.walmartimages.com/asr/d15f7193-0a29-4b06-bf3f-7f156dac6b17.1bd47de06863f0cb6c848a726cb69259.jpeg" alt="" />
        </div>
        <div className="card-metainfo-cont">
            <button className='btn btn-primary'>Options</button>
            <h5>$ 35.00</h5>
            <p>Lorem ipsum dolor sit !</p>
        </div>
    </div>
    </>
  )
}

export default Card