class Storage {

	static openStorage = () => {
	    let toDo;
	    if (!localStorage.getItem('toDo')) {
		    toDo = {'first project': 
		    			[{title: "chores", date: "2021-10-7", priority: "high", description: "test"}, 					   
						{title: "2chores", date: "22021-10-7", priority: "2high", description: "tes2t"}]
					};
	    } else { toDo = JSON.parse(localStorage.getItem('toDo')) };
	    return toDo;
    }

	static getStorage = () => JSON.parse(localStorage.getItem('todo'));

	static setStorage = (todo) => localStorage.setItem('todo', JSON.stringify(todo));
}

export { Storage }