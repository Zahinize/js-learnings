import NAME, { FAM_NAME, ATTRIBUTES } from './modules/zahin-alwa/about.js';
import TOP_MOVIES from './modules/zahin-alwa/top-movies.js';

document.open();
document.write(`<b>NAME:</b> ${NAME} <br>`);

function writeToDocument(key, value) {
	const template = `<b>${key}:</b> ${value} <br>`;

	document.write(template);
}

// Log all family members
function logFamily() {
	return FAM_NAME.forEach(object => writeToDocument(object.relation, object.name));
}
logFamily();

// Log all attributes
function logAttributes() {
	return Object.keys(ATTRIBUTES).forEach(key => {
		const value = ATTRIBUTES[key];
		const isValueArray = !!(Array.isArray(value) && value.length);
		const computedValue = isValueArray ? value.join(', ') : value;

		writeToDocument(key, computedValue);
	});
}
logAttributes();

// Log all Top Movies
function logTopMovies() {
	const key = 'MOVIES';
	const computedValue = TOP_MOVIES.join(', ');

	return writeToDocument(key, computedValue);
}
logTopMovies();

document.close();
