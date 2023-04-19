
import Dashboard from "views/Dashboard.js";
import AddIssue from "views/AddIssue.js";


// import TableList from "views/Tables.js";

import UserPage from "views/User.js";


var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Home",
  //   // icon: `faHome`,
  //   component: Dashboard,
  //   layout: "/admin"
  // },
   {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  // {
  //   path: "/AddIssue",
  //   name: "Add Issue",
  //   // icon: "nc-icon nc-bell-55",
  //   component: AddIssue,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin"
  }

  
];
export default routes;
