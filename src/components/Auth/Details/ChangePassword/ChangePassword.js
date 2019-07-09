import React from "react";
import './_ChangePassword.scss'


const ChangePassword = (props) => (
  <div class="col-12 col-lg-9">
    <div class="user-page clearfix">
      <h1 class="postname">Change Password </h1>
          <div class="row flex flex-wrap">
              <div class="col-12">
                  <div class="account-info clearfix">
                    <table cellspacing="0" cellpadding="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr>
                          <td>
                            <div class="account-form clearfix">
                                <div class="form-group">
                                    <label>Current Password</label>
                                    <input type="password" class="form-control"/>
                                    <span title="Vui lòng nhập Mật khẩu cũ." class="fa fa-exclamation-triangle" style={{display:'none'}}>Vui lòng nhập Mật khẩu cũ.</span>
                                </div>
                                <div class="form-group clearfix">
                                    <label>New Password</label>
                                    <span class="RadInput RadInput_Default" style={{ whiteSpace: 'normal' }}>
                                      <input size="20" class="riTextBox riEnabled form-control" type="password" style={{ width: '100%}' }} />
                                      <input type="hidden" autocomplete="off" />
                                    </span>
                                    <span title="Vui lòng nhập Mật khẩu mới." class="fa fa-exclamation-triangle" style={{display:'none'}}>Vui lòng nhập Mật khẩu mới.</span>
                                    <span class="fa fa-exclamation-triangle" style={{display:'none'}}></span>
                                </div>
                                <div class="form-group clearfix">
                                    <label>Verify New Password</label>
                                    <input type="password" class="form-control"/>
                                    <span title="Vui lòng nhập Xác nhận mật khẩu." class="fa fa-exclamation-triangle" style={{display:'none'}}>Vui lòng nhập Xác nhận mật khẩu.</span>
                                    <span title="Mật khẩu không khớp." class="fa fa-exclamation-triangle" style={{display:'none'}}>Mật khẩu không khớp.</span>
                                </div>
                                    <div class="form-group clearfix">
                                    </div>
                                    <input type="submit" value="Change Password" class="btn btn-default"/>
                                </div>
                              </td>
                            </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
      </div>
  </div>
);

export default ChangePassword;
