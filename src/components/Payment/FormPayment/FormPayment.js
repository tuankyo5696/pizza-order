import React from 'react'
import { withFormik } from 'formik';
import Step1 from './FormInformation/FormInformation';
// import Step2 from './FormPaymentInformation/FormPaymentInformation';
import { compose, withState, withHandlers } from "recompose";

const enhance = compose(
    withState("step","setStep",1),
    withHandlers({
    nextStep: ({ setStep, step }) => () => setStep(step + 1),
    prevStep: ({ setStep, step }) => () => setStep(step - 1)
    }),
    withFormik({
        mapPropsToValues: ({
          form: { phone, fullname, singleCheckbox, gender, securityNumber }
        }) => ({
          phone,
          fullname,
          singleCheckbox,
          gender,
          securityNumber
        }),
        handleSubmit(values, { props, setErrors, setSubmitting }) {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 100);
        },
        validate: values => {
          let errors = {};
          if (!values.fullname) {
            errors.fullname = "Full Name is Required";
          }
    
          return errors;
        }
        // validationSchema: ({registerSchema})
      })
)
const FormPayment = ({ handleSubmit, step, nextStep, prevStep, ...props }) => (
    <form onSubmit={handleSubmit}>
      {{
        1: <Step1 nextStep={nextStep} {...props} />,
      }[step] || <div />}
    </form>
);
  
export default (enhance(FormPayment))