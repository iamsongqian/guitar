import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduces from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import router from "./router";
import Nav from "./components/Nav";
import './index.css'

const store = createStore(
  rootReduces,
  composeWithDevTools(applyMiddleware(logger,thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      {router.map((item, key) => {
        return (
          <Route
            path={item.path}
            key={key}
            exact={item.exact}
            render={props => (
              <item.component {...props} routes={item.children} />
            )}
          />
        );
      })}
    </Router>
  </Provider>,
  document.getElementById("root")
);
