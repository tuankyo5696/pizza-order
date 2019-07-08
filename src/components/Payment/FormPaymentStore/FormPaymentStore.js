import React from "react";
import { withFormik } from "formik";
import Step2 from "./FormChooseStore/FormChooseStore";
import Step3 from "./FormPaymentInformation/FormPaymentInformation";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";
import * as Yup from "yup";
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
      console.log(orderData);
      props.onSendOrder(orderData);
      setTimeout(() => {}, 100);
    },
    validationSchema: paymentSchema
  })
);
const FormPayment = ({ handleSubmit, step, nextStep, prevStep, ...props }) => (
  <form onSubmit={handleSubmit}>
    {{
      1: <Step2 nextStep={nextStep} prevStep={prevStep} {...props} />,
      2: <Step3 prevStep={prevStep} {...props} />
    }[step] || <div />}
  </form>
);

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onSendOrder: orderData => dispatch(actions.purchaseOrder(orderData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhance(FormPayment));
