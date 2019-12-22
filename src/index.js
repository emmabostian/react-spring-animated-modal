import React, { useState } from "react";
import { useTransition } from "react-spring";
import ReactDOM from "react-dom";

import Modal from "./Modal";

import "./styles.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" }
  });

  return (
    <div className="App">
      <button
        className="show-modal-button"
        onClick={() => setModalVisible(!modalVisible)}
      >
        Show modal
      </button>
      {transitions.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              style={animation}
              closeModal={() => setModalVisible(false)}
              key={key}
            />
          )
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
