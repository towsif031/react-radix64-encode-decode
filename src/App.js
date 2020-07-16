import React, { useState } from 'react';
import Encode from './Encode';
import Decode from './Decode';

function App() {
	const [stringData, setStringData] = useState({
		inputString: '',
		showED: ''
	});

	function onChangeInput(e) {
		setStringData({ inputString: e.target.value });
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
			<form>
				<input
					type="text"
					name="inputString"
					placeholder="enter string..."
					value={setStringData.inputString}
					onChange={onChangeInput}
				></input>
			</form>
			<div>
				<button onClick={showEncode}>encode</button>
				<button onClick={showDecode}>decode</button>
				<div>
					{stringData.showED ? (
						<Encode stringData={stringData} />
					) : (
						<Decode stringData={stringData} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
