import React,{Component} from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { EMPTY_STRING } from "./../../../constants/helper";
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';
import {withRouter} from 'react-router-dom'
import "./_Signup.scss";

class SignUp extends Component {
  submitHandler = (account) => {
    this.props.onRegister(account.email,account.password,account.phone,account.firstname,account.lastname,this.props.isSignup)
  }
  render() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const signUpSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Too short")
        .max(50, "Too long")
        .required("Password is required"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      firstname: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("First Name is required"),
      lastname: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("First Name is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Too short")
        .max(13, "Too long")
        .required("Phone number is required")
    });
    return  (
      <div>
        <Formik
          initialValues={{
            email: EMPTY_STRING,
            password: EMPTY_STRING,
            passwordConfirmation: EMPTY_STRING,
            phone: EMPTY_STRING,
            firstname: EMPTY_STRING,
            lastname: EMPTY_STRING
          }}
          validationSchema={signUpSchema}
          onSubmit={values => {
            this.submitHandler(values);
            alert("Create account successfully");
            this.props.history.push('/signin');
          }}
        >
          {({ errors, touched }) => (
            <section className="Register">
              <div className="coverSignUp">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h2 className="headtitle">Sign Up</h2>
                      <Form>
                        <div className="form">
                          <div className="form-horizontal">
                            <h3>Login Information</h3>
                            <div className="form-group clearfix">
                              <label>Email</label>
                              <div>
                                <Field
                                  name="email"
                                  type="email"
                                  maxLength="100"
                                  tabIndex="10"
                                  className="form-control"
                                />
                                {errors.email && touched.email ? (
                                  <div className="Invalid">{errors.email}</div>
                                ) : EMPTY_STRING}
                              </div>
                            </div>
                            <div className="form-group clearfix">
                              <label>Password</label>
                              <div>
                                <span style={{ whiteSpace: "normal" }}>
                                  <Field
                                    name="password"
                                    maxLength="20"
                                    className="form-control"
                                    tabIndex="10"
                                    type="password"
                                    style={{ width: "100%" }}
                                  />
                                  {errors.password && touched.password ? (
                                    <div className="Invalid">{errors.password}</div>
                                  ) : EMPTY_STRING}
                                </span>
                              </div>
                            </div>
                            <div className="form-group clearfix">
                              <label>Verify Password</label>
                              <div>
                                <Field
                                  type="password"
                                  name="passwordConfirmation"
                                  maxLength="20"
                                  tabIndex="10"
                                  className="form-control"
                                />
                                {errors.passwordConfirmation &&
                                touched.passwordConfirmation ? (
                                  <div className="Invalid">
                                    {errors.passwordConfirmation}
                                  </div>
                                ) : EMPTY_STRING}
                              </div>
                            </div>
                            <hr />
                            <br />
                            <h3>Account Information</h3>
                            <div className="form-group clearfix">
                              <label>Phone Number</label>
                              <div>
                                <Field
                                  name="phone"
                                  type="text"
                                  maxLength="50"
                                  tabIndex="10"
                                  className="form-control"
                                />
                                {errors.phone && touched.phone ? (
                                  <div className="Invalid">{errors.phone}</div>
                                ) : EMPTY_STRING}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="custom-control-label col-sm-3">
                                First Name
                              </label>
                              <div className="col-sm-9">
                                <Field
                                  name="firstname"
                                  type="text"
                                  maxLength="100"
                                  size="45"
                                  tabIndex="10"
                                  className="form-control"
                                />
                                {errors.firstname && touched.firstname ? (
                                  <div className="Invalid">{errors.firstname}</div>
                                ) : EMPTY_STRING}
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="custom-control-label col-sm-3">
                                Last Name
                              </label>
                              <div className="col-sm-9">
                                <Field
                                  name="lastname"
                                  type="text"
                                  maxLength="100"
                                  size="45"
                                  tabIndex="10"
                                  className="form-control"
                                />
                                {errors.lastname && touched.lastname ? (
                                  <div className="Invalid">{errors.lastname}</div>
                                ) : EMPTY_STRING}
                              </div>
                            </div>
                          </div>
                          <div className="divBtnSignUp">
                            <button type="submit" className="btnSignUp">
                              Create Account
                              <i className="fas fa-chevron-right" />
                            </button>
                            <div />
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Formik>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== '',
    isSignup: state.auth.isSignup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (email, password, phone, firstname, lastname, isSignup) =>
    dispatch(actions.register(email, password, phone, firstname,lastname,isSignup))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignUp));
