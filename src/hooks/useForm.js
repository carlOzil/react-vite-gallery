import { useState } from "react";


export const useForm = (newCatOn) => {

    const [data, setData] = useState('');

    const handleChange = ({ target }) => {
        setData(target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        newCatOn(data);
        setData('');
    };

    return {
        data,
        handleChange,
        handleSubmit
    };
};

