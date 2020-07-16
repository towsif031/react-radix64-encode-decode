import React from 'react';

function Decode({ stringData }) {
	const stringToDecode = stringData.inputString;

	function decodeBase64(s) {
		try {
			return atob(s);
		} catch (error) {
			return 'The string to be decoded is not correctly encoded.';
		}
	}

	return (
		<div>
			<h1>{decodeBase64(stringToDecode)}</h1>
		</div>
	);
}

export default Decode;