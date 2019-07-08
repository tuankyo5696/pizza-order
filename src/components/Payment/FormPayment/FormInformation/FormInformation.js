import React, { Component } from "react";
import "./_FormInformation.scss";
import {TPHCM,HANOI} from './../../../../constants/staticdata';
import Navbar from "./../../NavbarPayment/Navbar";
import {Field} from 'formik';
import { EMPTY_STRING } from "../../../../constants/helper";
import axios from 'axios';
class Step2 extends Component {
  state = {
    infoHouseNumber: false,
    infoStreet: false,
    infoGuide: false,
    ProvinceTP: TPHCM,
    ProvinceHN: HANOI,
    houseNumber: EMPTY_STRING,
    district : EMPTY_STRING,
    province: EMPTY_STRING
  };
  showInfoHouseNumber = () => {
    this.setState({
      infoHouseNumber: !this.state.infoHouseNumber
    });
  };
  showInfoStreet = () => {
    this.setState({
      infoStreet: !this.state.infoStreet
    });
  };
  showInfoGuide = () => {
    this.setState({
      infoGuide: !this.state.infoGuide
    });
  };
  getBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  next = e => {
    e.preventDefault();
    this.props.nextStep();
    let address =
    {
      houseNumber: this.props.values.houseNumber,
      street: this.props.values.shippingAddress,
      dictrict: this.props.values.district,
      province: this.props.values.province,
      informationGuider: this.props.values.informationGuider
    }
    let tokenStr = localStorage.getItem("JWTtoken")
    axios.post("https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/shippingaddress", address, { headers: { "Authorization": `Bearer ${tokenStr}` } })
      .then(response => localStorage.setItem('idShipDelievery',response.data._id))
      .catch(error => console.log(error))
  };

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
    } = this.props;
    let optionsDistrict = values.province === "TPHCM" ?  this.state.ProvinceTP.map((district,index)=>(
      <option value={district.name} key={index}>{district.name}</option>
    )) : this.state.ProvinceHN.map((district,index)=>(
      <option value={district.name} key={index}>{district.name}</option>
    ))
  
    let chosenDistrict = EMPTY_STRING;
    if(values.province === "TPHCM"){
     this.state.ProvinceTP.map((district,index)=>{
        if(values.district === district.name){
          chosenDistrict = district
        }
        return chosenDistrict;
      })
    } else {
    this.state.ProvinceHN.map((district,index)=>{
        if(values.district === district.name){
          chosenDistrict= district
        }
        return   chosenDistrict;
      })
    }
  
    let optionsAddress = chosenDistrict ? chosenDistrict.address.map((address,index)=>(
      <option value ={address} key ={index}>{address}</option>
    )) : EMPTY_STRING
    return (
      <>
        <Navbar acitve1={false} active2={true} active3={false} />
        <div className="bodyDelivery">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h2>Delivery</h2>
              </div>
              <div className="page-content">
                <div className="form row">
                  <div className="provinceDistric">
                    <div className="col-6 form-group">
                      <label>Province</label>
                      <select className="form-control" name="province" value = {values.province} onChange = {handleChange} onBlur ={handleBlur}>
                        <option value="">Select province</option>
                        <option value="TPHCM">
                          TP Hồ Chí Minh
                        </option>
                        <option value="HANOI">
                          Hà Nội
                        </option>
                      </select>
                    </div>
                    <div className="col-6 form-group">
                      <label>District</label>
                      <select className="form-control" name="district" value = {values.district} onChange ={handleChange} onBlur={handleBlur}>
                        <option value="">Select district</option>
                          {optionsDistrict}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <label>
                      House Number<span className="star">(*)</span>
                    </label>
                    <div onClick={this.showInfoHouseNumber}>
                      {this.state.infoHouseNumber ? (
                        <div className="desc">
                          <p>
                            {" "}
                            Enter the house number before selecting a road.{" "}
                          </p>
                          <p>
                            {" "}
                            Enter only the number, part or alley, please fill in
                            the Information box below.{" "}
                          </p>
                          <p> Example: 12Bis / 34E, how to fill: </p>
                          <p> - House number: 12 </p>
                          <p> - Instruction information box: 12Bis / 34E </p>
                        </div>
                      ) : (
                        <span>
                          <i className="fas fa-info-circle" />
                        </span>
                      )}
                    </div>

                    <Field
                      className="form-control"
                      type="text"
                      name="houseNumber"
                      value={values.houseNumber}

                      // touched = {touched.houseNumber}
                    />
                       {errors.houseNumber && touched.houseNumber ? (
                                  <div className="Invalid">{errors.houseNumber}</div>
                                ) : EMPTY_STRING}
                    <div className="col-12 form-group">
                      <label>
                        Street<span className="star">(*)</span>
                      </label>
                      <div onClick={this.showInfoStreet}>
                        {this.state.infoStreet ? (
                          <div className="desc">
                            <p>
                              Please enter the unsigned street name and select
                              the road name from the suggestion. If no street
                              name is found, your address is outside our
                              delivery area.
                            </p>
                          </div>
                        ) : (
                          <span>
                            <i className="fas fa-info-circle" />
                          </span>
                        )}
                      </div>

                      <select className="form-control" name="shippingAddress" value = {values.shippingAddress} onChange ={handleChange}>
                      <option value="">Select Address</option>
                        {optionsAddress}
                      </select>    
                     
                    </div>
                    <div className="col-12 form-group">
                      <label>Information Guide</label>
                      <div onClick={this.showInfoGuide}>
                        {this.state.infoGuide ? (
                          <div className="desc">
                            <p>
                              Please enter the full number of lane, alley / lot,
                              floor (apartment)
                            </p>
                          </div>
                        ) : (
                          <span>
                            <i className="fas fa-info-circle" />
                          </span>
                        )}
                      </div>

                      <Field
                        className="form-control"
                        type="text"
                        name="informationGuide"
                        value = {values.informationGuide}
                      />
                    </div>
                    <div className="col-12 form-button">
                      <a
                        className="btn btn-prev"
                        href="/"
                        onClick={this.getBack}
                      >
                        Go Back
                      </a>
                      <button
                        className="btn-book btn btn-next"

                        onClick={this.next}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Step2;
