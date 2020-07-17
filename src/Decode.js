import React from 'react';

function Decode({ stringData }) {
	const stringToDecode = stringData.inputString;

	const charSet =
		'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

	function decodeRadix64(s) {
		let result = 0;

		s = s.split('');
		for (let e = 0; e < s.length; e++) {
			result = result * 64 + charSet.indexOf(s[e]);
		}

		return result;
	}

	return <>{decodeRadix64(stringToDecode)}</>;
}

export default Decode;
