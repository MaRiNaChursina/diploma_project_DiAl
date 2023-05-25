import React from "react";

function ParamOrder (props) {
    const {item} = props;
    return(
        <>
            <p>{item.Id}<br/>{item.date}{item.name}{item.phone}</p>
        </>
    )
}

export default ParamOrder;