let toDos = [];
let submitted = [];

async function updateTodo(submitted){
	toDos.push(submitted)
	submitted = []
}

async function saveSubmit(field1, field2){
	submitted = [field1, field2]
	updateTodo(submitted)
}


<form>
	<input type="text" name="field1" />
	<input type="text" name="field2" />
	<button type="submit">Add Todo</button>
</form>