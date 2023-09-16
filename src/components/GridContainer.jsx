import React from 'react';
import { CardPic } from './CardPic';

export const GridContainer = ({ categ }) => {

    const arrayPics = [1, 2, 3, 4];

    return (
        <section className="border mb-5">
            <h2>{categ}</h2>
            {
                arrayPics.map(pic => (
                    <CardPic key={pic}/>
                ))
            }
        </section>
    );
};

