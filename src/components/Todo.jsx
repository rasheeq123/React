import React, { useState } from 'react'

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const addNewTodo=(e)=>{

        if(!e.target.value. trim()) return; // ye space enter na ho islie
        // console.log(e.code);
        if(e.code==='Enter'){
             console.log(e.target.value); //jab enter krenge to input me jo hoga wo print hoga console me
             setTodoList([...todoList, e.target.value]); // ... means array me aaega aache se
             console.log([...todoList, e.target.value]);

             e.target.value="";
        }
    };
    // niche wala fun h delete pe tap krke delete krne ke lie 
    const removeTodo=(index)=>{
        console.log(index);
        const temp=todoList;
        temp.splice(index,1);
        setTodoList([...temp]);

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
                <div className="card-body p-0">
                {todoList.map( (todo, index)=>{return <div className={`d-flex justify-content-between p-4 ${index%2==0 ? 'bg-body-secondary':''}`}>
                    <h5>{todo}</h5>
                    <button className="btn btn-danger" onClick={()=>{removeTodo(index)}} > Delete</button>
                    </div>})}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo