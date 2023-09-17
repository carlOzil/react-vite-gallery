import React from 'react'

export const CardPic = ({ photographer, photographer_url, url, alt }) => {
    return (
        <div className="bg-dark card h-100 col-md-4 mb-3">
            <h3 className='text-warning'>{photographer}</h3>
            <a href={photographer_url} className='link-warning'>Web del autor</a>
            <div><img src={url} alt={alt} className="card-img-top img-fluid"/></div>
        </div>
    );
};

