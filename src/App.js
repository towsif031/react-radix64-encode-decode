import React, { useState } from 'react';
import Encode from './Encode';

function App() {
	const [stringData, setStringData] = useState({
		inputString: 'Hello World!'
	});

	return (
		<div className="App">
			<Encode stringData={stringData} />
		</div>
	);
}

export default App;
