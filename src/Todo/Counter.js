import React, { useState } from "react";



export const Counter = () => { 

    const [count, setCount] = useState(0);

    function previous() { 
        if (count < 0) { return }
        setCount(value => value - 1);
        // setCount(count - 1);
    }

    function next() { 
        setCount(value => value + 1);
        // setCount(count - 1);
    }


    return (
        <div>
            <button onClick={previous}>-</button>
            { count }
            <button onClick={next}>+</button>
        </div>
    )
}
