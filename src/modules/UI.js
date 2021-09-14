/* DISPLAY SECTION*/
// view all projects
//// view todo in each project
//// expand single todo
//// delete a todo
let docBody = document.querySelector('body');


class UI {
	
	static createTop = () => {
		let header = document.createElement('header');
		let h1 =  document.createElement('h1');
		h1.textContent = 'ToDoList';
		header.append(h1);
		docBody.append(header);
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




export { UI }