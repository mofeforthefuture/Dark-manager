// this is a todo app
import React from 'react'
import { Button, Card, Form, Badge, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import './App.css'

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
				<span 
				style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
					{index + 1}. {' '}{todo.text} : {todo.description} 
					<Button className='btnss' variant="outline-danger" onClick={() => removeTodo(index)}>
						<Icon name='trash' />	
					</Button>
					<Button className='btnss' variant="outline-success" onClick={() => markTodo(index)}>
						✓
					</Button>{' '}
					</span>
				<div>
					<Badge variant={todo.isDone ?  "success" : "warning"}>{todo.isDone ? 'Completed' : 'Pending' }</Badge>

				</div>
</div>
	</>
	)}
/*---------Inputs for the todos-----------*/
function FormInputs({ addTodo }) {
	var [show, setShow] = React.useState(true)
	var [value1, setValue1] = React.useState([{ text: '' }]);
	var [value2, setValue2] = React.useState([{ description: '' }]);
	let newValue = [value1, value2]
	//console.log(11, value);
	var formSubmit = x => {
		if (!newValue) return;
		if (value1.length <= 1)  return;
		x.preventDefault();
		addTodo(newValue)
		console.log(newValue);
		setValue1("")
		setValue2("")
	};
	var showForm = s => {
		s.preventDefault()
		if(show){
		setShow(false)
		}else setShow(true)
	}
	return (
		<>
			<Icon onClick={showForm} circular inverted  className='add-icon'name='add' />
		<Form onSubmit={formSubmit} inline hidden={show}>
			<Row>
				<Col>
				<Form.Control type="text" className="inputt" value={value1.text} onChange={e => setValue1(e.target.value)} placeholder="Add new todo" required />
				<Form.Control type="text" className="inputt" value={value2.description} onChange={e => setValue2(e.target.value)} placeholder="Add description (Optional)" />
				</Col>
			</Row>
			<Button  className='Submit-btn' type="submit">
				Submit
			</Button>
		</Form>
		</>
	)
}



/*---------The main function component-------------*/
function Todo() {
	let [todos, setTodos] = React.useState([
		{
			text: "This is a sample todo",
			description: "This is a sample description",
			isDone: false
		}
	]);

	let addTodo = toDo => {
		let newTodos = [...todos, { text: toDo[0], description: toDo[1] }];
		setTodos(newTodos);
	};

	let markTodo = index => {
		let newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	let removeTodo = index => {
		let newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos); 
	};

	return (
		<>
			<div className="app">
				<div className="container">
					<h1 className="text-center mb-4 text">Task Manager</h1>
					<FormInputs addTodo={addTodo} />
					<div>
						{todos.map((todo, index) => (
							
							<Card className='animate__animated animate__backInLeft cardBody'>
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

