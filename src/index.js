// has to have default todo

import "./styles/index.css"
import { compareAsc, format } from 'date-fns'
import { TodoCreator, todoProject } from './modules/todoApp.js'

let thisProject = 'first project';
const completeProject = {
	'first project': [{
						title: "chores",
						date: "2021-10-7",
						priority: "high",
						description: "test"},
					   {
					   	title: "2chores",
					   	date: "22021-10-7",
						priority: "2high",
						description: "tes2t",
					   }],
	'second project': [{
						title: "chores",
						date: "2021-10-7",
						priority: "high",
						description: "test"},
					   {
					   	title: "2chores",
					   	date: "22021-10-7",
						priority: "2high",
						description: "tes2t",
					   }],
};
let newItem = new TodoItem({title: 'num', date: '2021-10-7', priority: 'high', description:'test'});
let otherItem = new TodoItem({title: '3', date: '22021-10-7', priority: '2high', description:'tes2t'});
completeProject[thisProject].push(newItem);
completeProject[thisProject].push(otherItem);
console.log(Object.keys(completeProject))
todoProject.removeProject({toDoData: completeProject, projectName: thisProject})
console.log(Object.keys(completeProject))
