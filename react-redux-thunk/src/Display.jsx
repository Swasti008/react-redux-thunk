import React from "react";
import axios from "axios";
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux/reducers";
import { ShowData, ShowError } from "./Redux/actions";
import { useState, useEffect } from "react";

const store = createStore(reducers, applyMiddleware(thunk));

function fetchData() {
  return function ForType() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => store.dispatch(ShowData(res.data)))
      .catch((error) => store.dispatch(ShowError(error)));
  };
}

export default function Display() {
  const [state, setState] = useState([]);

  store.subscribe(() => {
    setState(store.getState().data);
  });

  return (
    <div>
      <button onClick={store.dispatch(fetchData)}>Fetch Data</button>
      <div>
        {state.map((each) => {
          return (
            <div key={each.id}>
              <h3>{each.name}</h3>
              <p>{each.email}</p>
            </div>
          );
        })}
        {state.length > 0 && (
          <button onClick={() => setState([])}>Close</button>
        )}
      </div>
    </div>
  );
}
