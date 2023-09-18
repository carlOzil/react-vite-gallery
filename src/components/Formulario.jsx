import React from 'react';
import { useForm } from '../hooks/useForm';


export const Formulario = ({ newCatOn }) => {

    const { data, handleChange, handleSubmit } = useForm(newCatOn);
    
    return (
        <form className="mb-5" onSubmit={handleSubmit} >
            <input
                type="text"
                name="buscar"
                placeholder="Elige categoría.."
                className="form-control"
                value={data}
                onChange={handleChange}
                required
            />
            <input type="submit" className="form-control btn btn-warning" value="Find!" />
        </form>
    );
};