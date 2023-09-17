
import { consultaFetch } from './consultaFetch';

export const getPics = async (categ) => {
    const { data } = await consultaFetch(categ);
    const { photos } = data
   
    const pics = photos.map((pic) => ({
        id: pic.id,
        photographer: pic.photographer,
        photographer_url: pic.photographer_url,
        url: pic.src.medium,
        alt: pic.alt

    }));


    return pics
};

// console.log(getPics('car'));