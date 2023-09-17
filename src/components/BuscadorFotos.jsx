import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { GridContainer } from "./GridContainer";

export const BuscadorFotos = () => {

    const [arrayCateg, setArrayCateg] = useState([]);
    
    const newCatOn = async (categ) => {

        const encontrada = arrayCateg.some(item => item.toLowerCase() === categ.toLowerCase());
        if (encontrada) return
        setArrayCateg(initialCats => [categ, ...initialCats]);

    };

    return (
        <>
            <h1 className="text-center">Search</h1>

            {/* FORM */}
            <Formulario newCatOn={newCatOn} />

            {/* GRIDGALLERY */}
            {
                arrayCateg.map((categ) => (

                    <GridContainer key={categ} categ={categ} />

                ))
            }
        </>
    );
};