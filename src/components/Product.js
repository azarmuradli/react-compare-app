import React, { Component } from 'react'
import {connect} from "react-redux"
import {compare} from "../actions"

class Product extends Component {
    render() {
        const {name,image,price,colors,condition,description,compare}=this.props.product
   
        return (
            <div className="col-md-3" style={{marginTop:"100px"}}>
                <div className="card">
                    <div className="cart-img">
                        <div className="overlay"></div>   
                       <h1 onClick={()=>this.props.compare(this.props.product)}>{compare?"REMOVE":"COMPARE"}</h1>
                <img className="card-img-top img-fluid" src={image} alt="Card image cap"/>
                </div>
                <div className="card-body d-flex justify-content-between">
                    <div className="">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    </div>
                   <p>{price}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{compare})(Product)


