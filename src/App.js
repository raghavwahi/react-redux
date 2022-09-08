import React from "react";
import { Provider } from "react-redux";

import { store } from "./Store";

import AppRouting from "./Router/AppRouting";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouting />
      </Provider>
    );
  }
}

export default App;
