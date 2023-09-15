import React from 'react'
import './RowPost.css'
function TextContent() {
    return (
        <div className='text-container'>
            <h1 className='heading'>Watch everywhere</h1>
            <p className='text'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
    );
}

function VideoContent() {
    return (
        <div className='image-wrapper'>
            <img className='poster' alt='poster' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
            <video className='video' controls muted autoPlay loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type='video/mp4' />
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