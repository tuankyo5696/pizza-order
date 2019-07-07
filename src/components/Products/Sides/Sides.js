import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';

class Sides extends Component{
   addCart =  e => {
    e.preventDefault();
    this.props.onAddCart({...this.props.side})
  }
  render() {
    return(
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a className="item btn-buy"  onClick = {this.addCart} href="/">
          <figure>
            <div className="box-img">
              <img src={this.props.side.picture} alt={this.props.side.name} />
              </div>
              <figcaption>
                <h4>{this.props.side.name}</h4>
                <p className="price"> {this.props.side.prices[0].price.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1,')+"₫"}</p>
                <div className="btn-addcart">
                  Add To Cart
                  <span className="lnr lnr-arrow-right" />
                </div>
              </figcaption>
         
          </figure>
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {

  
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCart: (product) => dispatch(actions.addToCart(product))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Sides);
