import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';
class Drinks extends Component{
  addCart =  e => {
    e.preventDefault();
    this.props.onAddCart({ ...this.props.drink })
    
  }
  render() {
    return (
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a className="item btn-buy" href="/" onClick = {this.addCart}>
          <figure>
            <div className="box-img">
              <img src={this.props.drink.picture} alt={this.props.drink.name} />
              <figcaption>
                <h4>{this.props.drink.name}</h4>
                <p className="price"> {this.props.drink.prices[0].price}</p>
                <div className="btn-addcart">
                  Add To Cart
                  <span className="lnr lnr-arrow-right" />
                </div>
              </figcaption>
            </div>
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
    onAddCart: (product) => dispatch(actions.addToCart(product)),
    onIncrementCartQuantity: (_id) => dispatch(actions.incrementCartQuantity(_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Drinks);
