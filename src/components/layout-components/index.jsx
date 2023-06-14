/* eslint-disable react/prop-types */
import React from "react";
const PageLayout = ({children="", id="container",  className=""}) => {
    return (
        <div className={`${className}`} id={"top"}>
            <div id={id}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;