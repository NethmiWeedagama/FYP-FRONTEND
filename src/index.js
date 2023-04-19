
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
// import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/css/paper-dashboard.css";
import AdminLayout from "layouts/Admin.js";
import Main from "layouts/Main.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
   
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Route path="/" component={props => <Navbar {...props} />} /> */}
      <Route path="/" component={Main} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
);
