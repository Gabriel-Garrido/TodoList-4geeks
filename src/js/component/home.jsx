import React from 'react'
import NewTask from './newTask.jsx';

//create your first component
const Home = () => {
	
	
	return (
		<div className="container mb-8">

			<h1 id="title" className="text-center fs-1 mb-8 pb-8">Todo List</h1>

			<NewTask/>

		</div>
	);
};

export default Home;
