// has to have default todo

import "./styles/index.css"
import { compareAsc, format } from 'date-fns'
import { createTodoItem, todoProject } from './modules/todoApp.js'
import { Storage } from './modules/storage.js'
import { UI } from './modules/UI.js'
let thisProject = 'first project';
const toDo = Storage.openStorage()

console.log(toDo);
let newItem = new createTodoItem({title: 'num', date: '2021-10-7', priority: 'high', description:'test'});
let otherItem = new createTodoItem({title: '3', date: '22021-10-7', priority: '2high', description:'tes2t'});
let theOldToDo =  {title: "2chores", date: "22021-10-7", priority: "2high", description: "tes2t"};
let theNewToDo = {title: "baz", date: "900-10-7", priority: "medium", description: "test2"};

toDo[thisProject].push(newItem);
toDo[thisProject].push(otherItem);


todoProject.editTodo({toDoData: toDo, projectName: thisProject, oldToDo: theOldToDo, newToDo: theNewToDo})
console.log(toDo[thisProject][1])

UI.createTop()