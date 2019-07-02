import React, { Component } from "react";
import "./_Modal.scss";
import Backdrop from "./../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.chilren !== this.props.children
    );
  }
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal-Wrapper"
          style={{
            display: this.props.show ? "block" : "none",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div className="Modal">{this.props.children}</div>
        </div>
      </>
    );
  }
}
export default Modal;
