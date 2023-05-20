import { ICar } from '@/interface/carInterface';
import axios from 'axios'

const API_URL = 'http://localhost:3333'

axios.defaults.baseURL = API_URL;
export const CarServices = {
    async getAll(){
        const {data} = await axios.get<ICar[]>('./cars');
        return data;
    },

    async getByID(id:string){
        const {data} = await axios.get<ICar[]>('./cars', {
            params: {
                id
            }
        });
        return data[0];
    }
}

export default CarServices;