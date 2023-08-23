import {httpAxios} from '../src/helper/httpHelper';

export function createProduct(){
httpAxios.post("/product/createProduct")
}