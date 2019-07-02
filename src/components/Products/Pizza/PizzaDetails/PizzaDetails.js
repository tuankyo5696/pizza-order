import React, { Component } from "react";
import "./_PizzaDetails.scss";
import { EMPTY_STRING } from "./../../../../constants/helper";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import {
  RadioButton,
  RadioButtonGroup
} from "./../../../UI/RadioButton/RadioButton";

class PizzaDetails extends Component {
  state = {
    totalPrice: 0,
    purchase: false
  };
  handleChange = e => {
    this.setState({
      purchase: false
    });
  };
  purchaseHandler = () => {
    console.log("abc");
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
          console.log(values);
          let totalPrice = 0;
          const sizePrice = JSON.parse(values.radioGroup);
          totalPrice = totalPrice + sizePrice.price;
          if (values.radioGroup3 !== EMPTY_STRING) {
            const topping = JSON.parse(values.radioGroup3);
            totalPrice = totalPrice + topping.price;
          }
          console.log(sizePrice.price);
          this.setState({
            totalPrice: totalPrice,
            purchase: true
          });
          console.log(this.state.totalPrice);
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
                    {this.state.totalPrice > 0
                      ? this.state.totalPrice
                      : this.props.pizza.prices[0].price}
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
                      Check Prices
                    </button>
                    <button
                      type="button"
                      className="btn btn-continue addcart"
                      onClick={this.purchaseHandler}
                      disabled={!this.state.purchase ? true : false}
                    >
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
export default PizzaDetails;
