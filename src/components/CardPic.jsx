import React from 'react'

export const CardPic = ({ photographer, photographer_url, url, alt }) => {
    return (
        <article className="bg-dark card h-100 col-md-4 mb-2">
            <div className="card-body">
                <h3 className='card-title text-warning'>{photographer}</h3>
                <a href={photographer_url} className='link-warning'>Web del autor</a>
            </div>
            <div>
                <img src={url} alt={alt} className="card-img-top img-fluid mb-2" />
            </div>
        </article>
    );
};

