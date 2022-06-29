import React, { useContext} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Context from '../context'


const styles = {
    button: {
        backgroundColor: 'brown',
        borderRadius: '50%',
        color: '#ffffff',
        border: 'none',
    }
}


function TodoItem({ todo, index, onChange }) { 

    const { removeTodo } = useContext( Context )
    const classes = []

    if (todo.completed) { 
        classes.push('done')
    }

    return (
        <li className="todo__item"  >
            <span className={ classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={ todo.completed}
                    className='todo__input'
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
            {todo.title}
            </span>
            <button onClick={() => { removeTodo(todo.id)} } style={ styles.button }>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem