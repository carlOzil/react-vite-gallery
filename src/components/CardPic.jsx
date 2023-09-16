import React from 'react'

export const CardPic = ({pic}) => {
    return (
        <article className="border mb-5">
            <h3>{pic}</h3>
            <p>Autor{pic}</p>
            <img src="" alt="" />
        </article>
    );
};

