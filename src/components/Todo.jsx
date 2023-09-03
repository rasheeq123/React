import React, { useState } from 'react'

const Todo = () => {

    const [todoList, settodoList] = useState([]);

    const addNewTodo=(e)=>{
        // console.log(e.code);
        if(e.code=='Enter'){
             console.log(e.target.value); //jab enter krenge to input me jo hoga wo print hoga console me
        }
    }
  return (
    <div>
        <div className="container">
            <h1 className='text-center my-5'> Todo List</h1>
            <div className="card">
                <div className="card-header">
                    <input type="text"className='form-control' onKeyDown={ addNewTodo } />
                    {/* onkeydown mtlb jab press krenge or jab release krenge ki to onkeyup */}


                </div>
                <div className="card-body"></div>
            </div>
        </div>
    </div>
  )
}

export default Todo