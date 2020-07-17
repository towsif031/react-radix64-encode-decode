import React from 'react';

function Encode({ stringData }) {
	const stringToEncode = stringData.inputString;

	const charSet =
		'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

	function encodeToRadix64(value) {
		if (
			isNaN(Number(value)) ||
			value === null ||
			value === Number.POSITIVE_INFINITY
		)
			return 'The input is not valid';
		if (value < 0) return "Can't represent negative numbers.";

		let mod,
			result = '';

		while (true) {
			mod = value % 64;
			result = charSet.charAt(mod) + result;
			value = Math.floor(value / 64);

			if (value === 0) {
				break;
			}
		}

		return result;
	}

	return <>{encodeToRadix64(stringToEncode)}</>;
}

export default Encode;
