const docBody = document.querySelector('body');

class InterfaceCreation {
  static createTop = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'ToDoList';
    header.append(h1);
    docBody.append(header);
  };

  static createTodoArea = () => {
    const main = document.createElement('main');
    docBody.append(main);
  };

  static createAddProject = () => {
    const main = document.querySelector('main');
    const plusDiv = document.createElement('div');
    plusDiv.setAttribute('id', 'plus-button');
    plusDiv.textContent = '+';
    main.append(plusDiv);
  };

  static createProjectArea = () => {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('projectArea');
    main.append(section);
  };

  static createProject = (projectName) => {
    const section = document.querySelector('section');
    const projectDiv = document.createElement('div');
    const topProject = document.createElement('div');
    const spanProjectName = document.createElement('div');
    spanProjectName.textContent = projectName;
    spanProjectName.classList.add('spanProjectName');
    const threeDots = document.createElement('span');
    threeDots.textContent = `\u2807`;
    threeDots.classList.add('three-dots');

    topProject.classList.add('projectDivName');
    topProject.append(spanProjectName, threeDots);
    projectDiv.append(topProject);
    projectDiv.setAttribute('id', `${projectName}`);
    projectDiv.classList.add('project');
    section.append(projectDiv);
  };

  static createTodoList = ({ todo, projectName }) => {
    const project = document.querySelector(`#${projectName}`);
    const todoUl = document.createElement('ul');
    for (const task in todo) {
      const todoLi = document.createElement('li');
      todoLi.textContent = todo[task];
      todoLi.classList.add(task);
      todoUl.append(todoLi);
    }
    const threeDots = document.createElement('span');
    threeDots.textContent = '%';
    todoUl.append(threeDots);
    project.append(todoUl);
  };
}
// class InterfaceManipulation {}
export { InterfaceCreation /* InterfaceManipulation */ };
