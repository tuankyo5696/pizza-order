import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { EMPTY_STRING } from "../../constants/helper";
import "./_Contact.scss";
class LocationSearchStore extends Component {
  state = {
    address: localStorage.getItem("address") ? localStorage.getItem("address") : EMPTY_STRING
      ? localStorage.getItem("address")
      : EMPTY_STRING,
    suggestion: [
      {
        name: "203 Nguyễn Văn Tạo, Nhà Bè, Hồ Chí Minh, Việt Nam",
        _id: "5d2199e73b58c72688ffda1b",
        latLng: {
          lat: 10.6542726,
          lng: 106.72904949999997
        }
      },
      {
        name: "Etown Đường Ấp Bắc, Tân Bình, Hồ Chí Minh, Việt Nam",
        _id: "5d21a4223b58c72688ffda1c",
        latLng: {
          lat: 10.800994,
          lng: 106.64149759999998
        }
      },
      {
        name:
          " ETown Floor 2 Cộng Hòa, phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
        _id: "5d21a47a3b58c72688ffda1d",
        latLng: {
          lat: 10.8020047,
          lng: 106.6413804
        }
      },
      {
        name: "Nguyễn Văn Luông Quận 6, Hồ Chí Minh, Việt Nam",
        _id: "5d21a47a3b58c72688ffda1d",
        latLng: {
          lat: 10.7434224,
          lng: 106.63468290000003
        }
      }
    ]
  };
  handleChange = e => {
    let obj = JSON.parse(e.target.value);
    this.props.changePosition(obj.latLng);
    localStorage.setItem("address", obj.name);
    localStorage.setItem("idAddress", obj._id);
    this.setState({
      address: obj.name
    });
  };

  render() {
    const renderSuggestion = this.state.suggestion.map((option, index) => (
      <option key={index} value={JSON.stringify(option)}>
        {option.name}
      </option>
    ));
    const optionStore = (
      <section className="vhs-shop-list">
        <h2>Pyco's Stores</h2>

        <div className="Block-content">
          <div className="Block-shop-list-nav">
            <div className="form">
              <div className="form-group">
                <h3>Stores</h3>
                <select
                  className="form-control custom-select"
                  onChange={this.handleChange}
                  value={this.props.value}
                >
                  <option value="">{this.state.address}</option>
                  {renderSuggestion}
                </select>
                <label className="active">
                  <span>{this.state.address}</span>
                </label>
                <div className="col-12 form-button">
                  <a
                    className="btn btn-prev"
                    href="/"
                    onClick={this.props.getBack}
                  >
                    Go Back
                  </a>
                  <a
                    className="btn-book btn btn-next"
                    href="/"
                    onClick={this.props.next}
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

    return <div>{optionStore}</div>;
  }
}
export default withRouter(LocationSearchStore);
