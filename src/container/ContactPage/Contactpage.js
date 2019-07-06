import React, { Component } from "react";
import Contact from "./../../components/Contact/Contact";
class ContactPage extends Component {
  render() {
    return (
      <div style={{}}>
        <Contact
          google={this.props.google}
          center={{ lat: 10.8020047, lng: 106.6413804 }}
          height="100vh"
          zoom={15}
        />
      </div>
    );
  }
}
export default ContactPage;
