import React, { Component } from 'react'

import { Formik,Field,Form } from 'formik';
import * as Yup from "yup";
import './_ChangePassword.scss'
import { EMPTY_STRING } from "../../../../constants/helper";
import axios from 'axios';

class ChangePassword extends Component {
  render(){
    
const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("Password is required"),
    newPassword: Yup.string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("Password is required"),
    verifynewPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  )
});
    return (
      <Formik
      initialValues={{
        currentPassword: EMPTY_STRING,
        newPassword: EMPTY_STRING,
        verifynewPassword : EMPTY_STRING
      }}
      validationSchema={changePasswordSchema}
        onSubmit={values => {
          const tokenStr = localStorage.getItem("JWTtoken")
          const changePassword = {
            oldpassword: values.currentPassword,
            password: values.newPassword,
            confirm: values.verifynewPassword
          }
          axios.put("https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/users/password", changePassword,{ headers: { Authorization: `Bearer ${tokenStr}` } })
          .then(response =>alert(response.data))
          .catch(error => console.log(error))
      }}
      > 
        {({ errors, touched }) => (
          
          <div className="user-page clearfix">
          <h1 className="postname">Change Password </h1>
              <div className="row flex flex-wrap">
                  <div className="col-12">
                      <div className="account-info clearfix">
                        <table cellSpacing="0" cellPadding="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <tbody>
                            <tr>
                              <td>
                          <div className="account-form clearfix">
                            <Form>
                                    <div className="form-group">
                                        <label>Current Password</label>
                                        <Field type="password" name="currentPassword" className="form-control" />
                                        {errors.currentPassword && touched.currentPassword ? (
                                        <div className="Invalid">{errors.currentPassword}</div>
                                      ) : EMPTY_STRING}
                                    </div>
                                    <div className="form-group clearfix">
                                        <label>New Password</label>
                                        <span className="RadInput RadInput_Default" style={{ whiteSpace: 'normal' }}>
                                          <Field size="20" className="riTextBox riEnabled form-control" type="password" style={{ width: '100%}' }} name="newPassword" />
                                <input type="hidden" autoComplete="off" />
                              </span>
                              {errors.newPassword && touched.newPassword ? (
                                        <div className="Invalid">{errors.newPassword}</div>
                                      ) : EMPTY_STRING}
    
                                    </div>
                                    <div className="form-group clearfix">
                                        <label>Verify New Password</label>
                                        <Field type="password" className="form-control" name="verifynewPassword"/>
                                        {errors.verifynewPassword && touched.verifynewPassword ? (
                                        <div className="Invalid">{errors.verifynewPassword}</div>
                                      ) : EMPTY_STRING}
                                    </div>
                                        <div className="form-group clearfix">
                                        </div>
                              <button type="submit" className="btn btn-next" style={{
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: '#fff'
                            }}>Change Password</button>
                            </Form>
                                    </div>
                                  </td>
                                </tr>
                          </tbody>
                      </table>
                    </div>
                </div>
            </div>
          </div>
    
            )}
        </Formik>
    );
  }
} 

export default ChangePassword;
