import './styles/index.css';
import { compareAsc, format } from 'date-fns';
import { createTodoItem, todoProject } from './modules/todoApp.js';
import { Storage } from './modules/storage.js';
import { InterfaceCreation } from './modules/UI.js';

const toDo = Storage.openStorage();

InterfaceCreation.createTop();
InterfaceCreation.createTodoArea();
InterfaceCreation.createAddProject();
InterfaceCreation.createProjectArea();

for (const project in toDo) {
  InterfaceCreation.createProject(project);
  for (const singleTodo in toDo[`${project}`]) {
    const thisTodo = toDo[`${project}`][`${singleTodo}`];
    InterfaceCreation.createTodoList({ todo: thisTodo, projectName: project });
  }
}
