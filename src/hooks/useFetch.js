import React, { useEffect, useState } from 'react';
import { getPics } from '../helpers/getPics';


export const useFetch = (categ) => {

  const [arrayPics, setArrayPics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArrayPics = async () => {
    const newArrayPics = await getPics(categ);
    setArrayPics(newArrayPics);
    setIsLoading(false);
  };


  useEffect(() => {
    getArrayPics();

  }, [])

  return {
    arrayPics,
    isLoading
  }
}
