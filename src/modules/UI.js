/* DISPLAY SECTION*/
// view all projects
//// view todo in each project
//// expand single todo
//// delete a todo

class UI {
	let body = document.querySelector('body');

	static createTop = () => {
		let header = document.createElement('header');
		let h1 =  document.createElement('h1');
		h1.textContent
		header.append(h1);
		body.append(header);
	}
}


export { UI }