import React, { Component } from "react";

import { ToastContainer, cssTransition } from "react-toastify";

export default class MyToastContainer extends Component {
  render() {
    const zoom = cssTransition({
      enter: "zoomIn",
      exit: "zoomOut",
      duration: 750
    });

    return (
      <ToastContainer
        autoClose={30000}
        transition={zoom}
        position="top-right"
        hideProgressBar
      />
    );
  }
}
