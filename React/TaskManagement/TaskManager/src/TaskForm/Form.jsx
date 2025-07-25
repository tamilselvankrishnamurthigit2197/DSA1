import React, { useState } from 'react'

const Form = ({addTask}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value.trim()) {
            console.log("Form submitted", value);

            addTask(value);
            setValue("");    
        }
    }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div className='add-task-action'>
                <input
                    type="text"
                    className='add-task-input'
                    placeholder='Add a task'
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                />
                <button
                    type='submit'
                    className='add-task-btn'>
                    Add
                </button>
        </div>
        </form>
    </>
  )
}

export default Form