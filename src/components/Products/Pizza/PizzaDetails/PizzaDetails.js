import React, { Component } from "react";
import "./_PizzaDetails.scss";
import { EMPTY_STRING } from "./../../../../constants/helper";
import { connect } from "react-redux";
import * as actions from "./../../../../store/actions/index";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import {
  RadioButton,
  RadioButtonGroup
} from "./../../../UI/RadioButton/RadioButton";

class PizzaDetails extends Component {
  state = {
    totalPrice: 0,
    checkPrice: 0,
    purchase: false,
    pizza: {}
  };
  handleChange = e => {
    this.setState({
      purchase: false
    });
  };
  purchaseHandler = () => {
    
  };
  render() {
    const choosePizzaSize = this.props.pizza.prices.map(price => (
      <Field
        key={price._id}
        component={RadioButton}
        name="radioGroup"
        id={price._id}
        label={price.size}
        value={JSON.stringify(price)}
      />
    ));
    const chooseCrust = this.props.pizza.wrapper.map((wrap, index) => (
      <Field
        key={index}
        component={RadioButton}
        name="radioGroup2"
        id={wrap}
        label={wrap}
        value={wrap}
      />
    ));
    const chooseTopping = this.props.pizza.options.map(option => (
      <Field
        key={option._id}
        component={RadioButton}
        name="radioGroup3"
        id={option._id}
        label={option.name + ".............." + option.price}
        value={JSON.stringify(option)}
      />
    ));
    return (
      <Formik
        initialValues={{
          radioGroup: EMPTY_STRING,
          radioGroup2: EMPTY_STRING,
          radioGroup3: EMPTY_STRING
        }}
        validationSchema={Yup.object().shape({
          radioGroup: Yup.string().required("Please choose size"),
          radioGroup2: Yup.string().required("Please choose crust!")
        })}
        onSubmit={(values, actions) => {
          let totalPrice = 0;
          let checkPrice = 0;
          let options = EMPTY_STRING;
          let subName = EMPTY_STRING;
          const sizePrice = JSON.parse(values.radioGroup);
          totalPrice = totalPrice + sizePrice.price;
          checkPrice = checkPrice + sizePrice.price;
          const size = sizePrice.size === "Medium - 9 inch" ? '9"' : '12"';
          if (values.radioGroup3 !== EMPTY_STRING) {
            const topping = JSON.parse(values.radioGroup3);
            checkPrice = checkPrice + topping.price;
            subName = topping;
            options = topping;
          }

          this.setState({
            totalPrice: totalPrice,
            checkPrice: checkPrice,
            pizza: {
              name: size + this.props.pizza.name,
              subName: subName,
              _id: this.props.pizza._id,
              category: this.props.pizza.category,
              picture: this.props.pizza.picture,
              wrapper: values.radioGroup2,
              options: options ? [options._id] : undefined,
              prices: [
                {
                  _id: sizePrice._id,
                  price: totalPrice
                }
              ]
            },
            purchase: true
          });
          this.props.onAddCart(this.state.pizza);
          this.props.cancel();
        }}
        render={({
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          handleChange,
          values,
          errors,
          touched,
          isSubmitting
        }) => (
          <section className="product-select modal-complete">
            <button className="remodal-close" onClick={this.props.cancel} />
            <Form>
              <div className="content popup-body">
                <div className="product-detail-wrapper">
                  <h4>{this.props.pizza.name}</h4>
                  <p>{this.props.pizza.description}</p>
                  <img src={this.props.pizza.picture} alt={EMPTY_STRING} />
                  <p className="price product-price">
                    {this.state.checkPrice > 0
                      ? this.state.checkPrice
                          .toFixed(0)
                          .replace(/(\d)(?=(\d{3})+$)/g, "$1,") + "₫"
                      : this.props.pizza.prices[0].price
                          .toFixed(0)
                          .replace(/(\d)(?=(\d{3})+$)/g, "$1,") + "₫"}
                  </p>
                </div>
                <div className="option-list popup-option">
                  <div className="product-option">
                    <RadioButtonGroup
                      id="radioGroup"
                      label="Choose Pizza Size"
                      value={values.radioGroup}
                      error={errors.radioGroup}
                      touched={touched.radioGroup}
                    >
                      {choosePizzaSize}
                    </RadioButtonGroup>
                    <RadioButtonGroup
                      id="radioGroup2"
                      label="Choose Crust"
                      value={values.radioGroup2}
                      error={errors.radioGroup2}
                      touched={touched.radioGroup2}
                    >
                      {chooseCrust}
                    </RadioButtonGroup>
                    <RadioButtonGroup
                      id="radioGroup3"
                      label="Choose Topping"
                      value={values.radioGroup3}
                      error={errors.radioGroup3}
                      touched={touched.radioGroup3}
                    >
                      {chooseTopping}
                    </RadioButtonGroup>
                    <button type="submit" className="btn btn-continue addcart">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </section>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onAddCart: product => dispatch(actions.addToCart(product))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaDetails);
