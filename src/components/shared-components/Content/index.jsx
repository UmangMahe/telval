/* eslint-disable react/prop-types */
import React from "react";

const Content = ({children="", id="content", className="section"})=>{
    return (
        <div id={id}>
            <div className={`${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Content;