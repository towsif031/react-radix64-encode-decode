import React from 'react';

function Encode({ stringData }) {
	const stringToEncode = stringData.inputString;

	function encodeToBase64(s) {
		return btoa(s);
	}

	return (
		<div>
			<h1>{encodeToBase64(stringToEncode)}</h1>
		</div>
	);
}

export default Encode;
