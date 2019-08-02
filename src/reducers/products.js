import {FETCH_PRODUCTS,COMPARE} from "../actions"



export default (state=[],action)=> {
    switch(action.type) {
        case FETCH_PRODUCTS : 
        
            return [...state,...action.payload.data.products.map(product=>
                ({...product, compare: false}))]

            case COMPARE :
               return [...state.map(product=>product===action.payload?{...product,compare:!product.compare}:product)]
                
            

        default:
            return state
    }

}