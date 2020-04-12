import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl);

        return response;
    }
    catch(error) {

    }
}