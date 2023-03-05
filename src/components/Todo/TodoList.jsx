import { useState } from "react";
import { useGetTodosQuery,useAddTodoMutation,useUpdateTodoMutation,useDeleteTodoMutation } from "../../container/RTK/api/apiSlice";

const TodoList = ()=>{
    const [newTodo,setNewTodo] = useState('');
    const {
        data:todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const handleSubmit = (e)=>{
        e.preventDefault();

        // addTodo
        addTodo({userId:1,title:newTodo,completed:false});

        setNewTodo('');
    }

    const newItemSection = 
        <form onSubmit={handleSubmit} style={{margin:"2rem auto",width:"100%"}}>
            <lable htmlFor="new-todo">Enter a new Todo item</lable>
            <div className="new-todo">
                <input type="text" id="new-todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter new todo" />
            </div>
            <button className="submit">
                🚚
            </button>
        </form>

    let content;
    // define conditional content
    if(isLoading){
        content = <p>Loadind....</p>
    }
    else if(isSuccess){
        // content = JSON.stringify(todos)
        
        content = todos.map(todo=>{
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input type="checkbox" 
                        checked={todo.completed}
                        id={todo.id}
                        onChange={()=>updateTodo({...todo,completed:!todo.completed})}
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={()=>deleteTodo({id:todo.id})}> 🎃</button>
                </article>
            )
        })
    }
    else if(isError){
        content =  <p>{error}</p>
    }
    return(
        <div >
            <h1>Todo list</h1>
            {newItemSection}
            {content}
        </div>
    )
}

export default TodoList;