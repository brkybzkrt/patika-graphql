import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import 'antd/dist/antd.min.css';
import 'index.css';
import {  BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(

  <ApolloProvider client={client}>
    <Router>
    <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
