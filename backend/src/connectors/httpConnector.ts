import axios from 'axios';

class HttpConnector {
    async get(url: string){
        try{
            const res = await axios.get(url)
            return res.data;
        }catch(error){
            throw new Error(`http get error: {error}`)
        }
    }
}

export default new HttpConnector();