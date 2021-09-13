/* TODO SECTION*/
//// each obj gonna have (title, description, dueDate and priority.)
// todo gonna have date, need to find way to work with date
// have the option to set a todo as complete and be able to change the todo priority

class createTodoItem {
	 constructor({title, date, priority, description}) {
	 	this.title = title;
	 	this.date = date;
	 	this.priority = priority;
		this.description = description;
	}
}

class todoProject {

	static todoIndex = (toDoData, projectName, ToDo) => {
		let index = toDoData[projectName].findIndex(s => s.title === ToDo.title && s.date === ToDo.date)
		return index
	}

	static createNewProject = ({toDoData, projectName}) => {
		return toDoData[projectName] = []
	}
	static addInProject = ({toDoData, projectName, newToDo}) => {
		return toDoData[projectName].push(newTodo);
	}
	
	static removeFromProject = ({toDoData, projectName, ToDo}) => {
		let index = todoProject.todoIndex(toDoData, projectName, ToDo);
		return toDoData[projectName].splice(index, 1);
	}

	static removeProject = ({toDoData, projectName}) => {
		delete toDoData[projectName]
	}

	static editTodo = ({toDoData, projectName, oldToDo, newToDo}) => {
		let index = todoProject.todoIndex(toDoData, projectName, oldToDo);
		return toDoData[projectName][index] = newToDo;
	}
}



export  { createTodoItem, todoProject }