
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import UserPage from "views/UserPage.js";
import DashboardView from "views/Dashboard.js";
import UserPage from "views/User.js";
import routes from "routes.js";

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {/* {routes.map((prop, key) => {
            return (
             
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
             
              
              
            );
          })} */}
          <Route path="/admin/user-page" render={(props) => <UserPage {...props} />} />
          <Route path="/admin/dashboard" component={DashboardView} />
        </Switch>
        <Footer fluid />
      </div>
      
    </div>
  );
}

export default Dashboard;
