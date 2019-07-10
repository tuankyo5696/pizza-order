import React, { Component } from 'react'
import axios from 'axios';
import "./_DetailsInformation.scss";
import { EMPTY_STRING } from '../../../../constants/helper';


class DetailsInformation extends Component {
    state = {
        user: EMPTY_STRING
    }
    componentDidMount() {
        const tokenStr = localStorage.getItem('JWTtoken') ? localStorage.getItem('JWTtoken') : EMPTY_STRING
        axios.get("https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/users", { headers: { Authorization: `Bearer ${tokenStr}` } })
            .then(response => { this.setState({ user: response.data }) })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="user-page clearfix">
                <h1 className="postname">
                    Account Information
                </h1>
                <div className="row flex flex-wrap">
                    <div className="col-12">
                        <div className="account-info clearfix">
                            <h2 className="posttitle">
                                Account Information</h2>
                            <div className="account-form clearfix">
                                <div className="form-group clearfix">
                                    <label className="settinglabel control-label">Phone</label>
                                    <div>
                                        <input type="text" defaultValue={this.state.user.phone} maxLength="100" tabIndex="10" className="form-control" />
                                        <span style={{ display: 'none' }}></span>
                                        <span style={{ display: 'none' }}></span>
                                    </div>
                                </div>
                                <div className="form-group clearfix">
                                    <label htmlFor="ctl00_mainContent_txtEmail" className="settinglabel control-label">Email</label>
                                    <div>
                                        <input type="text" defaultValue={this.state.user.email} disabled="disabled" tabIndex="10" className="aspNetDisabled form-control" />
                                        <span style={{ display: 'none' }}></span>
                                        <span style={{ display: 'none' }}></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="settingrow form-group">
                                        <label htmlFor="" className="settinglabel control-label col-sm-3">First Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" defaultValue={this.state.user.firstname} maxLength="100" size="45" tabIndex="10" className="form-control" />
                                            <span title="Vui lòng nhập Tên." style={{ display: 'none' }}>Vui lòng nhập Tên.
                        </span>
                                        </div>
                                    </div>
                                    <div className="settingrow form-group">
                                        <label className="settinglabel control-label col-sm-3">Last Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" defaultValue={this.state.user.lastname} maxLength="100" size="45" tabIndex="10" className="form-control" />
                                            <span title="Vui lòng nhập Họ." style={{ display: 'none' }}>
                                                Vui lòng nhập Họ.</span>
                                        </div>
                                    </div>
                                    <div className="settingrow form-group">
                                        <label className="settinglabel control-label col-sm-3">
                                            Gender</label><div className="col-sm-9">
                                            <select name="ctl00$mainContent$ddGender" tabIndex="10" className="form-control">
                                                <option value="">Select Gender</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>

                                            </select></div></div>
                                </div>

                                <div className="form-group clearfix">
                                    <label htmlFor="" className="settinglabel control-label">Province</label>
                                    <div className="">
                                        <select name="" id="">
                                            <option>TP Hồ Chí Minh</option>
                                            <option>Hà Nội</option>

                                        </select>
                                    </div>
                                </div>

                                <div className="form-group clearfix">
                                    <label htmlFor="" className="settinglabel control-label">District</label>
                                </div>
                                <div className="form-group clearfix">
                                    <label htmlFor="ctl00_mainContent_txtEmail" className="settinglabel control-label">ShippingAddress</label>
                                    <div className="">
                                        <input type="text" disabled="disabled" className="aspNetDisabled form-control" />
                                    </div>
                                </div>

                                <div className="form-group clearfix">
                                    <label htmlFor="ctl00_mainContent_txtEmail" className="settinglabel control-label">Information Guide</label>

                                    <input type="text" disabled="disabled" className="aspNetDisabled form-control" />
                                </div>

                                <div className="form-group clearfix">
                                    <label htmlFor="ctl00_mainContent_txtShippingWard" className="settinglabel control-label">House Number</label>
                                    <div className="">
                                        <input name="" type="text" id="" disabled="disabled" className="aspNetDisabled form-control" />
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <div className="">
                                        <input type="submit" name="ctl00$mainContent$btnUpdate" value="Update" className="btn btn-next" style={{
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                color: '#fff'
                            }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DetailsInformation;
