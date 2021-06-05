import React from "react";
import {Route} from "react-router-dom";
import LayoutNav from "./LayoutNav";
import LayoutDashboardNav from "./LayoutDashboardNav";

// wrapper component
const DynamicLayoutRoute = props => {
    const { component: RoutedComponent, layout, ...rest } = props;
  
    // render actual Route from react-router
    const actualRouteComponent = (
      <Route
        {...rest}
        render={props => (
           <RoutedComponent {...props} />
        )}
      />
    );
  
    // depends on the layout, you can wrap Route component in different layouts
    switch (layout) {
      case 'NAV': {
        return (
          <LayoutNav>
            {actualRouteComponent}
          </LayoutNav>
        )
      }
      case 'DASH_BOARD_NAV': {
        return (
          <LayoutDashboardNav>
            {actualRouteComponent}
          </LayoutDashboardNav>
        )
      }
      default: {
        return (
          <LayoutNav>
            {actualRouteComponent}
          </LayoutNav>
        )
      }
    }
  };

  export default DynamicLayoutRoute;