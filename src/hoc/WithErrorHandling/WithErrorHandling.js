import React, { Component } from "react";

import Modal from "../../components/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";

const WithErrorHandling = (WrappedCompoenet, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
      this.requestInterceptor = axios.interceptors.request.use((error) => {
        this.setState({ error: null });
        return error;
      });
      this.responseIntercepto = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount() {
      console.log(
        "Will unmount",
        this.requestInterceptor,
        this.responseIntercepto
      );
      axios.interceptors.response.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseIntercepto);
    }

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          ;
          <WrappedCompoenet {...this.props} />;
        </Auxiliary>
      );
    }
  };
};

export default WithErrorHandling;
