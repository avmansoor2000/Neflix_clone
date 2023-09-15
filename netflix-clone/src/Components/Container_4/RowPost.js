import React from 'react'
import './RowPost.css'
function TextContent() {
    return (
        <div className='image-wrapper'>
            <img className='poster' alt='poster' src='https://occ-0-6246-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
            
            
        </div>
    );
}

function VideoContent() {
    return (
        <div className='text-container'>
            <h1 className='heading'>Create profiles for kids</h1>
            <p className='text'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
           
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