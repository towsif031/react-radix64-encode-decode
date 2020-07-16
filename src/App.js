import React, { useState } from 'react';
import Encode from './Encode';

function App() {
	const [stringData, setStringData] = useState({
		inputString: ''
	});

	function onChangeInput(e) {
		setStringData({ inputString: e.target.value });
	}

	return (
		<div className="App">
			<form>
				<input
					type="text"
					name="inputString"
					placeholder="enter string..."
					value={setStringData.inputString}
					onChange={onChangeInput}
				></input>
			</form>
			<Encode stringData={stringData} />
		</div>
	);
}

export default App;
