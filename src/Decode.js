import React from 'react';

function Decode({ stringData }) {
	const stringToDecode = stringData.inputString;

	function decodeBase64(s) {
		return atob(s);
	}

	return (
		<div>
			<h1>{decodeBase64(stringToDecode)}</h1>
		</div>
	);
}

export default Decode;
