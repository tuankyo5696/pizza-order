import React from 'react'
import { withFormik } from 'formik';
import Step1 from './FormOrderMethod/FormOrderMethod';
import Step2 from './FormInformation/FormInformation';
import Step3 from './FormPaymentInformation/FormPaymentInformation';
import * as Yup from "yup";
import { compose, withState, withHandlers } from "recompose";
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
    .min(2,"Too short")
    .required("Full name is required"),
  houseNumber: Yup.string()
    .min(2,"Too short")
    .required("HouseNumber is required")
});
const enhance = compose(
    withState("step","setStep",1),
    withHandlers({
    nextStep: ({ setStep, step }) => () => setStep(step + 1),
    prevStep: ({ setStep, step }) => () => setStep(step - 1)
    }),
    withFormik({
        mapPropsToValues: ({
          form: { houseNumber, fullname, district, province, phone,shippingAddress,email}
        }) => ({
          houseNumber,
          district ,
          province,
          fullname,
          shippingAddress,
          phone,
          email
        }),
        handleSubmit(values, { props, setErrors, setSubmitting }) {
          setTimeout(() => {
            console.log(values)
          }, 100);
        },
        validationSchema : paymentSchema
        // validate: values => {
        //   let errors = {};
        //   if (!values.fullname) {
        //     errors.fullname = "Full Name is Required";
        //   }
    
        //   return errors;
        // }
  
      })
)
const FormPayment = ({ handleSubmit, step, nextStep, prevStep, ...props }) => (
    <form onSubmit={handleSubmit}>
      {{
      1: <Step1 nextStep={nextStep} {...props} />,
      2: <Step2 nextStep={nextStep} prevStep={prevStep} {...props} />,
      3: <Step3 {...props} />
      }[step] || <div />}
    </form>
);
export default (enhance(FormPayment))