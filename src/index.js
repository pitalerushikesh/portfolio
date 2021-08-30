import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import "animate.css";

import Preloader from "./Pages/components/Preloader";

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for async data, remove this block
      return <Preloader />; // render null when app is not ready
    }

    return <Routes />;
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

ReactDOM.render(<App />, document.getElementById("root"));
