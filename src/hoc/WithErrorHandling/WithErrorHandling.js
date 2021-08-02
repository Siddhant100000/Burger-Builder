import React, { Component } from "react";

import Modal from "../../components/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";

const WithErrorHandling = (WrappedCompoenet, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      axios.interceptors.request.use((error) => {
        this.setState({ error: null });
        return error;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

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
