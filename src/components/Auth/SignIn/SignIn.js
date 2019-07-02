import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { EMPTY_STRING } from "./../../../constants/helper";
import * as Yup from "yup";
import "./_Signin.scss";
import { connect } from "react-redux";
import { withRouter,Redirect } from "react-router-dom";
import * as actions from "./../../../store/actions/index";

class SignIn extends Component {
  submitHandler = account => {
      this.props.onAuth(account.email, account.password, !this.props.isSignup);
    }
   

  render() {
    const signInSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Too short")
        .max(50, "Too long")
        .required("Password is required")
    });
    let errorMessage = EMPTY_STRING;
    if ( this.props.error ) {
      errorMessage = (
          <p>{this.props.error.message}</p>
      );
  }
    let authRedirect = EMPTY_STRING;
    if(this.props.isAuthenticated){
      authRedirect = <Redirect to={'/'} />
    }
    return (
      <div>
        {authRedirect}
        <Formik
          initialValues={{
            email: EMPTY_STRING,
            password: EMPTY_STRING
          }}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              this.submitHandler(values);
              setSubmitting(false);
            }, 100);
          }}
        >
          {({ errors, touched }) => (
            <section className="Register LoginSection">
              <div className="coverSignUp">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h2 className="headtitle">Login</h2>
                      <Form>
                        <div className="form">
                          <div className="form-horizontal">
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
                                ) : (
                                  EMPTY_STRING
                                )}
                              </div>
                            </div>
                            <div className="form-group clearfix">
                              <label>Password</label>
                              <div>
                                <span style={{ whiteSpace: "normal" }}>
                                  <Field
                                    size="20"
                                    name="password"
                                    maxLength="20"
                                    className="form-control"
                                    tabIndex="10"
                                    type="password"
                                    style={{ width: "100%" }}
                                  />
                                  {errors.password && touched.password ? (
                                    <div className="Invalid">
                                      {errors.password}
                                    </div>
                                  ) : (
                                    EMPTY_STRING
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="divBtnSignUp divLogin">
                              <button type="submit" className="btnSignUp">
                                Login
                                <i className="fas fa-chevron-right" />
                              </button>
                            </div>
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
        {errorMessage}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    user: state.user.auth,
    isAuthenticated: state.auth.token !== EMPTY_STRING,
    isSignup: state.auth.isSignup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onAuthSuccess: (token, userId) =>
      dispatch(actions.authSuccess(token, userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
