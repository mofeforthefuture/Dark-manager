/*import React, { useState } from "react";
import {  InputGroup, FormControl, Card, Col  } from "react-bootstrap";
import { Button, Icon, Form } from 'semantic-ui-react'
import './App.css'
import Sample from "./Components/Button";

function Todo() {
	var [show, setShow] = useState(true)
	const handleClick = () => show ? setShow(false) : setShow(true)


	// A toggle to show and hide the input
	class Buttons extends React.Component {
		render() {
			return (
				<>
					<Button animated className='adds' onClick={handleClick}>
						<Button.Content visible><Icon name='add' /></Button.Content>
						<Button.Content hidden>
							Add Task
					</Button.Content>
					</Button>
				</>
			);
		}
	}
	class TodoCard extends React.Component {
		render() {
			return (
				<>
					<Card>
						<Card body className='card-text'>This is some text within a card body.</Card>
						<Button><Icon name='trash' /></Button>
					</Card>
				</>
			)
		}
	}
	class TextFeild extends React.Component {
		render() {
			return (
				<	>
				<Form addTodo={addTodo}>
					<InputGroup className="mb-3 inputs"  hidden={show}>
						<InputGroup.Prepend>
							<InputGroup.Text>Create</InputGroup.Text>
						</InputGroup.Prepend>
							<Col>

						<FormControl placeholder='Task' required/>
					</Col>
							<Col>

						<FormControl placeholder='Description' />
							</Col>

					</InputGroup>
					</Form>
				</>
			);
		}
	}
	const [todos, setTodos] = React.useState([
		{
			text: "This is a sampe todo",
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
		<div className='App-header'>
			<Buttons />
			<TextFeild />
			<TodoCard />
			<Sample />
</div>
		</>
	);
}
export default Todo;*/
