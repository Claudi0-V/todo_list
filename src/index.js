import "./styles/index.css"
import { compareAsc, format } from 'date-fns'
import { createTodoItem, todoProject } from './modules/todoApp.js'
import { Storage } from './modules/storage.js'
import { UI } from './modules/UI.js'

const toDo = Storage.openStorage();

UI.createTop()