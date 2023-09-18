import React, { useEffect, useState } from 'react';
import { getPics } from '../helpers/getPics';


export const useFetch = (categ) => {

  const [arrayPics, setArrayPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [pag, setPag] = useState(1);

  const getArrayPics = async () => {

    const pics = await getPics(categ, pag);

    if (pics) {
      setArrayPics(pics);
      setIsLoading(false);

    } else {
      setIsError(err.message);
      
    };
  };

  const handlePrev = () => {
    setPag(pag - 1);

  };

  const handleNext = () => {
    setPag(pag + 1);

  };

  useEffect(() => {
    getArrayPics();

  }, [pag]);

  return {
    arrayPics,
    isLoading,
    isError,
    pag,
    handlePrev,
    handleNext

  };
};
