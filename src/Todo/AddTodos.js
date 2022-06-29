import React, { useState } from "react";
import './index.scss'
import PropTypes from 'prop-types'


function useInputValue(defaultValue = '' ) { 
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(""),
        value: () => value
    }
}



function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(e) { 
        e.preventDefault()

        if (input.value().trim()) { 
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form className="add__todo--form" onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo