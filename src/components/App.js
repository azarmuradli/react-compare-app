import React, { Component } from 'react'
import {connect} from "react-redux"
import Product from "./Product"
import {fetchProducts} from "../actions"
import {bindActionCreators} from "redux"



 class App extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
     
        
        return (
            <div className="container mt-5">
                <h1>Select minimum 2 product</h1>
                <div className="row">
             {this.props.products.map(product=>{
                 return <Product key={product.id} product={product} />
             })}
            </div>

         {this.props.products.filter(product=>product.compare===true).length<2?null:
         <table style={{marginTop:"100px"}}>
              <tr>
    <th></th>
    {this.props.products.map(product=>{
        if(product.compare) {
            return <th>{product.name}</th>
        }
    } )}
  </tr>
 
  <tr>
    <td>Price</td>
    {this.props.products.map(product=>{
        if(product.compare) {
            return <td>{product.price}</td>
        }
    } )}
  </tr>
  <tr>
    <td>Color</td>
    {this.props.products.map(product=>{
        if(product.compare) {
            return <td>
              {product.colors.map(color=>{
                  return <span style={{background:color}}></span>
              })}
            </td>
        }
    } )}
  </tr>
  <tr>
  <td>Condition</td>
   {this.props.products.map(product=>{
       if(product.compare) {
           return <td style={{background:product.condition==="Fresh"?"#48cfad":"#ff715b",color:"#fff"}}>{product.condition}</td>
       }
   })}
  </tr>
  


         </table>

}

            </div>
            
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return bindActionCreators({fetchProducts},dispatch)
}
const mapStateToProps=state=>{
    console.log(state.products);
    
    return {
        products:state.products
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
