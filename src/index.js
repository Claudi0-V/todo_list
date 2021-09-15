import "./styles/index.css"
import { compareAsc, format } from 'date-fns'
import { createTodoItem, todoProject } from './modules/todoApp.js'
import { Storage } from './modules/storage.js'
import { InterfaceCreation } from './modules/UI.js'

const toDo = Storage.openStorage();

InterfaceCreation.createTop();
InterfaceCreation.createTodoArea();
InterfaceCreation.createAddProject();

let plusBtn = document.querySelector('#plus-button');
console.log(plusBtn)
