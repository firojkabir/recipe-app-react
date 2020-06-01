import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
	
	const APP_ID = "607bf35f";
	const APP_KEY = "097c3060148835a83c93927fd7e44c55";

	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [counter, setCounter] = useState(0);
	
	useEffect(() => {
		console.log('Effect has been run');
	}, []);



	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text"/>
				<button 
					className="search-btn" type="submit">
					Search
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	);
};

export default App;
