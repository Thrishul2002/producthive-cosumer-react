import axios from'axios';

const PRODUCT_RESTAPI_URL='http://localhost:8088/producthive/api/products';

//service layer interacting with producthive restapi of springBoot using axios http library
export default class ProductService{

    static getProducts(){
        return axios.get(PRODUCT_RESTAPI_URL);
    }
}