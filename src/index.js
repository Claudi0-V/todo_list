import './styles/index.css';
import { compareAsc, format } from 'date-fns';
import { todoProject } from './modules/todoProject.js';
import { Storage } from './modules/storage.js';
import { InterfaceCreation } from './modules/UI.js';
import createTodoItem from './modules/todoItem.js';

const todoData = Storage.openStorage();

InterfaceCreation.createTop();
InterfaceCreation.createTodoArea();
InterfaceCreation.createAddProject();
InterfaceCreation.createProjectArea();

const todoKeys = Object.keys(todoData); 

todoKeys.forEach( key => {
  InterfaceCreation.createProject(key);
  const singleTodo = Object.values( todoData[key] )
  singleTodo.forEach( todo => 
    InterfaceCreation.createTodoList({ todo: todo, projectName: key }));
});