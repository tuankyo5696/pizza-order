import React from "react";
import { withFormik } from "formik";
import Step2 from "./FormChooseStore/FormChooseStore";
import Step3 from "./FormPaymentInformation/FormPaymentInformation";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { EMPTY_STRING } from './../../../constants/helper';
import * as actions from "./../../../store/actions/index";
import * as Yup from "yup";
import Spinner from './../../UI/Spinner/Spinner';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const paymentSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Too short")
    .max(13, "Too long")
    .required("Phone number is required"),
  fullname: Yup.string()
    .min(2, "Too short")
    .required("Full name is required")
});
let redirect = EMPTY_STRING
const enhance = compose(
  withState("step", "setStep", 1),
  withHandlers({
    nextStep: ({ setStep, step }) => () => setStep(step + 1),
    prevStep: ({ setStep, step }) => () => setStep(step - 1)
  }),
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({
      form: {
        orderMethod,
        paymentMethod,
        phone,
        fullname,
        shippingAddress,
        email,
        note,
        idAddress,
        orderLines
      }
    }) => ({
      orderMethod,
      paymentMethod,
      fullname,
      shippingAddress,
      idAddress,
      phone,
      email,
      note,
      orderLines
    }),
    handleSubmit(values, { props, setErrors, setSubmitting }) {
      let orderData = {
        payment: values.paymentMethod,
        orderLines: values.orderLines,
        shippingAddress: values.idAddress,
        orderMethod: values.orderMethod,
        name: values.fullname,
        email: values.email,
        phone: values.phone,
        note: values.note ? values.note : undefined
      };

      redirect = <Spinner />
      
      setTimeout(() => {
        props.onSendOrder(orderData);
        setSubmitting(false);
      }, 100);
    },
    validationSchema: paymentSchema
  })
);
const FormPayment = ({ handleSubmit, step, nextStep, prevStep, ...props }) => {
  if ( props.purchase) {
    alert('Order Successfully')
    props.onRemoveCart()
    redirect = EMPTY_STRING
  }
  return (
    <>
      
    <form onSubmit={handleSubmit}>
    {{
      1: <Step2 nextStep={nextStep} prevStep={prevStep} {...props} />,
      2: <Step3 prevStep={prevStep} {...props} />
    }[step] || <div />}
      </form>
      {redirect}
      </>
  )
}


const mapStateToProps = state => {
  return {
    purchase: state.orders.purchased,
    order: state.orders.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSendOrder: orderData => dispatch(actions.purchaseOrder(orderData)),
    onRemoveCart: () => dispatch(actions.removeAllCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhance(FormPayment));
