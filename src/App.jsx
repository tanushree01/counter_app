import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterUi from "./CounterUi";

function App() {

  return (
    <>
      <Provider store={store}>
        <CounterUi/>
      </Provider>
    </>
  );
}

export default App;
