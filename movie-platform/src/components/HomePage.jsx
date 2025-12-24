import React from 'react';
import '../styles/HomePage.css'; // Make sure to adjust the path based on your folder structure

const HomePage = () => {
    return (
        <div className="homepage-container">
            <img
                // // src="YOUR_IMAGE_URL_HERE" // Placeholder; replace with your image URL
                // alt="Movie Background"
                // className="background-image"
            />
            <div className="header">
                <h1 className="title">Mayor of Kingstown</h1>
                <p className="rating">Rating: 8.1/10 </p>
                <p className='release-date'> Release Date: 14 Nov 2021</p>
                <p className='genre'> Crime  Drama  Thriller</p>
                <p className="description">
The McLusky family are power brokers tackling themes of systemic racism, corruption and inequality in Kingstown, Michigan, where the business of incarceration is the only thriving industry.                </p>
                <div className="buttons">
                    <button className="play-button">PLAY</button>
                    <button className="info-button">INFO</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;