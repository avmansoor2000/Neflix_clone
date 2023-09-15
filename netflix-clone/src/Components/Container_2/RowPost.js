import React from 'react'
import './RowPost.css'
function TextContent() {
    return (
        <div className='image-wrapper'>
            <img className='poster' alt='poster' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
            
            
        </div>
    );
}

function VideoContent() {
    return (
        <div className='text-container'>
            <h1 className='heading'>Download your shows to watch offline</h1>
            <p className='text'>Save your favourites easily and always have something to watch.</p>
           
        </div>
    );
}

function RowPost2() {
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


export default RowPost2