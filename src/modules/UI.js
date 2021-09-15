let docBody = document.querySelector('body');

class InterfaceCreation {
	
	static createTop = () => {
		let header = document.createElement('header');
		let h1 =  document.createElement('h1');
		h1.textContent = 'ToDoList';
		header.append(h1);
		docBody.append(header);
	}

	static createTodoArea = () => {
		let main = document.createElement('main');
		docBody.append(main)
	}

	static createAddProject = () => {
		let main = document.querySelector('main')
		let plusDiv = document.createElement('div');
		plusDiv.setAttribute('id', 'plus-button');
		plusDiv.textContent = '+';
		main.append(plusDiv)
	}

	static createProject = ({project}) => {
		return 0
	}

	static createTodoList = ({todo}) => {
		console.table(todo)
		for (let task in todo) {
			console.log(task," : ", todo[task]);

		}
	}
}


class InterfaceManipulation {

}


export { InterfaceCreation, InterfaceManipulation }