/* TODO SECTION*/
//// each obj gonna have (title, description, dueDate and priority.)
// todo gonna have date, need to find way to work with date



// have the option to set a todo as complete and be able to change the todo priority

class TodoCreator {
	 constructor({title, date, priority, description}) {
	 	this.title = title;
	 	this.date = date;
	 	this.priority = priority;
		this.description = description;
	}
}

class todoProject {
	static createNewProject = ({toDoData, projectName}) => {
		return toDoData[projectName] = []
	}
	static addInProject = ({toDoData, projectName, newToDo}) => {
		return toDoData[projectName].push(newTodo);
	}
	
	static removeFromProject = ({toDoData, projectName, ToDo}) => {
		let index = toDoData[projectName].indexOf(ToDo)
		return toDoData[projectName].splice(index, 1);
	}

	static removeProject = ({toDoData, projectName}) => {
		delete toDoData[projectName]
	}
}



export { TodoCreator, todoProject }