import React from 'react'
import { withFormik } from 'formik'
import Step2 from './FormChooseStore/FormChooseStore';
import Step3 from './FormPaymentInformation/FormPaymentInformation';
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
  
      })
)
const FormPayment = ({ handleSubmit, step, nextStep, prevStep, ...props }) => (
    <form onSubmit={handleSubmit}>
      {{
      1: <Step2 nextStep={nextStep} prevStep={prevStep} {...props} />,
      2: <Step3 {...props} />
      }[step] || <div />}
    </form>
);
export default (enhance(FormPayment))