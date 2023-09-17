
export const consultaFetch = async (categ) => {

    const url = import.meta.env.VITE_APP_URL;
    const pexelsToken = import.meta.env.VITE_APP_AUTH;

    try {
        const respons = await fetch(`${url}${categ}`, {
            headers: {
                'Authorization': `${pexelsToken}`,
            }
        });

        if (respons.ok) {
            const data = await respons.json();
        
            return {
                ok: true,
                data
            };
        } else {
            throw new Error('El servidor no responde!');
        };
    } catch (err) {
        return {
            ok: false,
            err
        };
    };
};

// console.log(consultaFetch('casa'))