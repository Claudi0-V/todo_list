// has to have default todo

import "./styles/index.css"
import { compareAsc, format } from 'date-fns'
import { createTodoItem, todoProject } from './modules/todoApp.js'
import { Storage } from './modules/storage.js'
import { UI } from './modules/UI.js'

const toDo = {
	/*1*/'firstProject': /*2.1*/{ 'firstUniqueID': {/*3.1*/title: "chores", date: "2021-10-7", priority: "high", description: "test"},

					  /*2.2*/'secondUniqueID': { /*3.2*/title: "2chores", date: "22021-10-7", priority: "2high", description: "tes2t"}

					}
}
			 
			//	0 	1 				2
console.table(toDo['firstProject']['firstUniqueID']);
let newItem = new createTodoItem({title: 'num', dueDate: '2021-10-7', priority: 'high', description:'test'});
let otherItem = new createTodoItem({title: '3', dueDate: '22021-10-7', priority: '2high', description:'tes2t'});
let theOldToDo =  {title: "2chores", dueDate: "22021-10-7", priority: "2high", description: "tes2t"};
let theNewToDo = {title: "baz", dueDate: "900-10-7", priority: "medium", description: "test2"};

todoProject.createNewProject({toDoData: toDo, projectName: 'secondProject'});
console.table(toDo)

