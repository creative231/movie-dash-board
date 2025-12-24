import React from 'react';
import '../styles/About.css'; // Make sure this file exists

function About() {
    return (
        <div className="about-container">
            <h1>About Movie Platform</h1>
            <p>
                You can watch free movies and TV shows on the MovieBox website without downloading the app. 
                However, video speed may be slow if your internet connection is slow. 
                The Movie platform app lets you download movies and TV shows for offline viewing. 
                It also provides additional features like a community, friend tasks to earn points, and more. 
                Download the app to ensure uninterrupted access.
            </p>
        </div>
    );
}

export default About;