import React, { useState } from "react";




export const ShowText = () => { 
    // let value = "";

    function onChange(e) { 
        setValue(e.target.value);
    }


    const [value, setValue] = useState("test");

    const isDay = new Date().getHours() > 14 ? true : false;
    return (
        <div className={ isDay ? "day" : "night"}>
            <input onChange={onChange} />
            <div>
                { value }
            </div>
        </div>
    )
}

