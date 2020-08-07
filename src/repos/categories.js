import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

function getAllWithVideos() {
    return fetch(URL_CATEGORIES)
        .then(async (res) => {

            if(res.ok) {
                const jsonRes = await res.json();
                return jsonRes;
            }

            throw new Error('Não foi possível pegar os dados:(')
        })
        .catch((err) => {
            console.log(err.message)
        });
}

export default {
    getAllWithVideos
};