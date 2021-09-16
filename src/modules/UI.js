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

	static createProjectArea = () => {
		let main = document.querySelector('main');
		let section = document.createElement('section');
		section.classList.add('projectArea');
		main.append(section);
	}

	static createProject = (projectName) => {
		let section = document.querySelector('section');
		let projectDiv = document.createElement('div');
		let projectDivName = document.createElement('div');
		projectDivName.textContent = projectName;
		projectDivName.classList.add('projectDivName')
		projectDiv.setAttribute('id', `${projectName}`);
		projectDiv.classList.add('project');
		projectDiv.append(projectDivName);
		section.append(projectDiv);
	}

	static createTodoList = ({todo, projectName}) => {
		let project = document.querySelector(`#${projectName}`);
		let todoUl = document.createElement('ul');
		for (let task in todo) {
			let todoLi = document.createElement('li');
			todoLi.textContent = todo[task];
			todoLi.classList.add(task);
			todoUl.append(todoLi)
		}
		let threeDots = document.createElement('span');
		threeDots.textContent = '%'
		todoUl.append(threeDots);
		project.append(todoUl);
	}
}


class InterfaceManipulation {

}


export { InterfaceCreation, InterfaceManipulation };