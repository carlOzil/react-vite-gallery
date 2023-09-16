
export const consultaFetch = async (busqueda) => {
const url = import.meta.env.VITE_APP_URL;
const auth = import.meta.env.VITE_APP_AUTH
    try {
        const respons = await fetch(`${url}${busqueda}`, {
            headers: {
                'Authorization': `${auth}`,
            }
        });

        if (respons.ok) {
            const dataFetch = await respons.json();
            return {
                ok: true,
                dataFetch
            };
        } else {
            throw new Error('El servidor no responde!');
        };
    } catch (err) {
        return {
            ok: false,
            dataFetch
        };
    };
};