import React from 'react';
import { CardPic } from './CardPic';
import { useFetch } from '../hooks/useFetch';

export const GridContainer = ({ categ }) => {

    const { arrayPics, isLoading } = useFetch(categ)

    return (
        <section className="row mb-5">
            <h2 className='h1'>{categ}</h2>
            {
                (isLoading) ? <p className='alert alert-success'>Cargando...</p> :
                arrayPics && arrayPics.map((pic) => (
                    <CardPic key={pic.id} {...pic}/>
                ))
            }
        </section>
    );
};

