import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import LogoComponent from "./components/LogoComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LogoComponent />
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;
