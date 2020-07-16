import React from 'react';

function Encode({ stringData }) {
	const stringToEncode = stringData.inputString;

	function encodeToBase64(s) {
		return btoa(s);
	}

	return <>{encodeToBase64(stringToEncode)}</>;
}

export default Encode;
