import axios from 'axios';
export const FETCH_PRODUCTS="FETCH_PRODUCTS"
export const COMPARE="COMPARE"

export const  fetchProducts=()=>{
    let response= axios.get("products.json")

    return {
        type:FETCH_PRODUCTS,
        payload:response
    }
}

export const compare=value=>{
    
   
    return {
        type:COMPARE,
        payload:value
    }
}