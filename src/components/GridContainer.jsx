import React from 'react';
import { CardPic } from './CardPic';
import { useFetch } from '../hooks/useFetch';

export const GridContainer = ({ categ }) => {

    const { arrayPics, isLoading, pag, handlePrev, handleNext } = useFetch(categ)

    return (
        <section className="mb-5">
            <h2 className='h1'><strong>{categ}</strong></h2>

            <div className='text-center mb-1'>
                {(pag > 1) && <button className='prev btn btn-warning' onClick={handlePrev}>Prev</button>}
                <button className='btn btn-warning'>{pag}</button>
                <button className='next btn btn-warning' onClick={handleNext}>Next</button>
            </div>

            <div className='row'>
                {
                    (isLoading) ? <p className='alert alert-warning text-center'>Cargando...</p> :

                        (arrayPics.length > 0) ?
                            arrayPics.map((pic) => <CardPic key={pic.id} {...pic} />)
                            : <p>No hay imagenes para la categoría {categ}</p>

                }
            </div>
        </section>
    );
};

