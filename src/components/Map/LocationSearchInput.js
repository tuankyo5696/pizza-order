import React from "react";
import { withRouter } from "react-router-dom";
import { EMPTY_STRING } from "../../constants/helper";
import "./_Contact.scss";
class LocationSearchInput extends React.Component {
  state = {
    address: localStorage.getItem("address")
      ? localStorage.getItem("address")
      : EMPTY_STRING,
    suggestion: [
      {
        name: "Select Store",
        latLng: {
          lat: 10.8020047,
          lng: 106.6413804
        }
      },
      {
        name: "203 Nguyễn Văn Tạo, Nhà Bè, Hồ Chí Minh, Việt Nam",
        latLng: {
          lat: 10.6542726,
          lng: 106.72904949999997
        }
      },
      {
        name: "Etown Đường Ấp Bắc, Tân Bình, Hồ Chí Minh, Việt Nam",
        latLng: {
          lat: 10.800994,
          lng: 106.64149759999998
        }
      },
      {
        name:
          " ETown Floor 2 Cộng Hòa, phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
        latLng: {
          lat: 10.8020047,
          lng: 106.6413804
        }
      },
      {
        name: "Nguyễn Văn Luông Quận 6, Hồ Chí Minh, Việt Nam",
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
        <h2>Pyco's Store</h2>

        <div className="Block-content">
          <div className="Block-shop-list-nav">
            <div className="form">
              <div className="form-group">
                <h3>Store</h3>
                <select
                  className="form-control custom-select"
                  onChange={this.handleChange}
                >
                  {renderSuggestion}
                </select>
                <label className="active">
                  <span>{this.state.address}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

    return <div>{optionStore}</div>;
  }
}
export default withRouter(LocationSearchInput);
