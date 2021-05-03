// this is a todo app
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';

/*-------------items displayed in the card 
badge,
todo,
description,
delete icon,
complete icon-----------*/
function TodoItems({ todo, index, markTodo, removeTodo}){
	return(
	<>
<div className='todo-items'>
<span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>{todo.text} : {todo.description} </span>
				<div><Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
					<Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button></div>
</div>
	</>
	)}
/*---------Inputs for the todos-----------*/
	function FormInputs({ addTodo }) {
		const [value, setValue] = React.useState([{text:'', description: ''}])
	const formSubmit = x => {
		if (!value) return;
		x.preventDefault();
		addTodo(value)
		setValue("")
	}
return (
	<Form onSubmit={formSubmit}>
		<Form.Group>
			<Form.Control type="text" className="input" value={value.text} onChange={e => setValue(e.target.value)} placeholder="Add new todo" required />

			<Form.Control type="text" className="input" value={value.description} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
		</Form.Group>
		<Button variant="primary mb-3" type="submit">
			Submit
    </Button>
	</Form>
)}



/*---------The main function component-------------*/
function Todo() {
	const [todos, setTodos] = React.useState([
		{
			text: "This is a sampe todo",
			description: "vldjhghffs",
			isDone: false
		}
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const markTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos); 
	};
	return (
		<>
			<div className="app">
				<div className="container">
					<h1 className="text-center mb-4">Todo List</h1>
					<FormInputs addTodo={addTodo} />
					<div>
						{todos.map((todo, index) => (
							<Card>
								<Card.Body>
									<TodoItems
										key={index}
										index={index}
										todo={todo}
										markTodo={markTodo}
										removeTodo={removeTodo}
									/>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	)
}


export default Todo

