import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../../store/actions/index';
import { EMPTY_STRING } from '../../../../constants/helper';
class  BestSellers extends Component{
  state = {
    bestsellers : {
      _id : this.props._id,
      name: this.props.name,
      picture: this.props.picture,
      category: this.props.category,
      prices: [{
        price: this.props.prices[0].price
      }],
      subName: {
        name: EMPTY_STRING,
        price: EMPTY_STRING
      }
    }
  }
  addCart = e =>{
    e.preventDefault();
    this.props.onAddCart(this.state.bestsellers);
  }
  render(){
    return(
      <div>
           <a className="item btn-buy"  onClick = {this.addCart} href="/">
            <figure>
              <div className="box-img">
                <img src={this.props.picture} alt={this.props.name} />
                <figcaption>
                  <h4>{this.props.name}</h4>
                  <p className="price"> {this.props.prices[0].price}</p>
                  <div className="btn-addcart">
                    Add To Cart
                    <span className="lnr lnr-arrow-right" />
                  </div>
                </figcaption>
              </div>
            </figure>
          </a>
      </div>
  )
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
export default connect(mapStateToProps,mapDispatchToProps) (BestSellers);
