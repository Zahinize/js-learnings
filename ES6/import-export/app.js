import NAME, { FAM_NAME, ATTRIBUTES } from './module1.js';

document.open();
document.write(`<b>NAME:</b> ${NAME} <br>`);

// Log all family members
function logFamily() {
	return FAM_NAME.forEach(object => document.write(`<b>${object.relation}:</b> ${object.name} <br>`));
}
logFamily();

// Log all attributes
function logAttributes() {
	return Object.keys(ATTRIBUTES).forEach(key => {
		const value = ATTRIBUTES[key];
		const isValueArray = !!(Array.isArray(value) && value.length);
		const computedValue = isValueArray ? value.join(', ') : value;
		const computedTemplate = `<b>${key}:</b> ${computedValue}<br>`;

		document.write(computedTemplate);
	});
}
logAttributes();

document.close();
