import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('')
	const [error, setError] = useState(false)
	const [list, setList] = useState(new Values('#f15025').all(10))

	// This all(10) means 'get 10 lighter shades and 10 darker'
	// We can change it to 20 (get 5 lighter and 5 darker)
	// Or 1 (get 100 lighter and 100 darker shades)
	// It is a percentage: 10 = 1/10; 20 = 1/5; 1 = 1/100

	const handleSubmit = e => {
		e.preventDefault();
		setError(false);

		try {
			let colors = new Values(color).all(10)
			setList(colors);			
		} catch (err) {
			setError(true);
			console.log(err);	
		}	
	}

	return (
		<main>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text' 
						value={color}
						onChange={ e => setColor(e.target.value) }
						placeholder='#f15025'
						className={error ? 'error' : null}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>

			<section className='colors'>
				{list.map( (oneColor, index) => {
					// console.log(oneColor); <<< to see params
					return (
						<SingleColor 
							key={index} 
							{...oneColor} 
							index={index} 
							hexColor={oneColor.hex}
						/>
					)
				})}
			</section>
		</main>
	);
}

export default App;
