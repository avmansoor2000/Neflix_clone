import React from 'react'
import './RowPost.css'
function TextContent() {
    return (
        <div className='text-container'>
           
            <h1 className='heading'>Enjoy on your TV</h1>
            <p className='text'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
    );
}

function VideoContent() {
    return (
        <div className='image-wrapper'>
            <img className='poster' alt='poster' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
            <video className='video' controls muted autoPlay loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

function RowPost() {
    return (
        <div className='container2'>
            <div className='container2-left'>
                <TextContent />
            </div>
            <div className='container2-right'>
                <VideoContent />
            </div>
        </div>
    );
}


export default RowPost