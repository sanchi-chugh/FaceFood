import React from "react";
import Navbar from "./Navbar";

const LayoutNav = ({children}) => {
    return (
        <>
            <section className="container-fluid">
                <Navbar />
                {children}
            </section>
        </>
    );
}

export default LayoutNav;