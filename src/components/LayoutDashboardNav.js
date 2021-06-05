import React from "react";
import DashboardNav from "./DashboardNav";

const LayoutDashboardNav = ({children}) => {
    return (
        <>
            <section className="container-fluid">
                <DashboardNav />
                {children}
            </section>
        </>
    );
}

export default LayoutDashboardNav;