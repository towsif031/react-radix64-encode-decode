import React, { useState } from 'react';
import Encode from './Encode';
import Decode from './Decode';
import './App.css';

function App() {
	const [stringData, setStringData] = useState({
		inputString: '',
		showED: ''
	});

	function onChangeInput(e) {
		setStringData({ inputString: e.target.value, showED: true });
	}

	function showEncode(e) {
		setStringData({
			inputString: stringData.inputString,
			showED: true
		});
	}

	function showDecode(e) {
		setStringData({
			inputString: stringData.inputString,
			showED: false
		});
	}

	return (
		<div className="App">
			<h1>React Radix64 Encode | Decode</h1>
			<form>
				<label>Input</label>
				<input
					type="text"
					name="inputString"
					placeholder="enter string..."
					value={setStringData.inputString}
					onChange={onChangeInput}
				></input>
			</form>
			<div className="buttonsDiv">
				<button onClick={showEncode}>encode</button>
				<button onClick={showDecode}>decode</button>
			</div>
			<div className="outputDiv">
				<label>Output:</label>
				<span>
					{stringData.showED ? (
						<Encode stringData={stringData} />
					) : (
						<Decode stringData={stringData} />
					)}
				</span>
			</div>
		</div>
	);
}

export default App;
