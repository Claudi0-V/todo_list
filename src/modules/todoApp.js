class createTodoItem {
	 constructor({title, dueDate, priority, description}) {
	 	this.title = title;
	 	this.dueDate = dueDate;
	 	this.priority = priority;
		this.description = description;
	}
}

class todoProject {
	
	static createNewProject = ({toDoData, projectName}) =>  toDoData[projectName] = {};
	
	static addInProject = ({toDoData, projectName, UniqueID, newToDo}) => toDoData[projectName][UniqueID] = newToDo;
	
	static removeProject = ({toDoData, projectName}) =>	delete toDoData[projectName];
	
	static removeFromProject = ({toDoData, projectName, UniqueID}) => delete toDoData[projectName][UniqueID]

	//
	static editTodo = ({toDoData, projectName, UniqueID, newToDo}) => toDoData[projectName][UniqueID] = newToDo;
}


export  { createTodoItem, todoProject }