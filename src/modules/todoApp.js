class createTodoItem {
	 constructor({title, dueDate, priority, description}) {
	 	this.title = title;
	 	this.dueDate = dueDate;
	 	this.priority = priority;
		this.description = description;
	}
}

class todoProject {

	static createNewProject = ({toDoData, projectName}) =>  toDoData[projectName] = [];

	static addInProject = ({toDoData, projectName, newToDo}) => toDoData[projectName].push(newTodo);
	
	static removeProject = ({toDoData, projectName}) =>	delete toDoData[projectName];

	static todoIndex = (toDoData, projectName, ToDo) => {
		let index = toDoData[projectName].findIndex(s => s.title === ToDo.title && s.dueDate === ToDo.dueDate);
		return index;
	}

	static removeFromProject = ({toDoData, projectName, ToDo}) => {
		let index = todoProject.todoIndex(toDoData, projectName, ToDo);
		return toDoData[projectName].splice(index, 1);
	}

	static editTodo = ({toDoData, projectName, oldToDo, newToDo}) => {
		let index = todoProject.todoIndex(toDoData, projectName, oldToDo);
		return toDoData[projectName][index] = newToDo;
	}
}


export  { createTodoItem, todoProject }