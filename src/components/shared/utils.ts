const isEmpty = (obj: object) => Object.keys(obj).length === 0;
const isTrue = (value: unknown): value is true =>
	typeof value === "boolean" && value;

const isUndefined = (value: unknown): value is undefined =>
	typeof value === "undefined";

const isFalsyExcludingZero = (value: unknown): boolean => {
	return (
		value === false ||
		value === null ||
		isUndefined(value) ||
		value === "" ||
		Number.isNaN(value)
	);
};

const camel2KebabCase = (str: string) =>
	str.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();

type PropType = string | number | boolean | undefined;
type Prop = Record<string, PropType>;

/**
 * Convert props to class names without duplicating
 * @param defaultClassName expected space separated class names ex: "text red bg-white"
 * @param props object of props ex: { text: true, bg: "white" }
 **/
const cn = (defaultClassName = "", props: Prop = {}) => {
	const defaultClassNames = defaultClassName.split(" ");
	const classNames = Object.entries(props).flatMap(convertClassName);
	return {
		className: Array.from(new Set([...defaultClassNames, ...classNames])).join(
			" ",
		),
	};
};
const convertClassName = ([name, value]: [string, PropType]) => {
	if (isFalsyExcludingZero(value)) return [];
	if (isTrue(value)) return [camel2KebabCase(name)];
	return [`${camel2KebabCase(name)}_${value}`];
};

interface ValidatableHTMLElement extends HTMLElement {
	validity: ValidityState;
	validationMessage: string;
	checkValidity(): boolean;
	reportValidity(): boolean;
}

const isValidatableHTMLElement = (
	element: Element,
): element is ValidatableHTMLElement =>
	["INPUT", "SELECT", "TEXTAREA"].includes(element.nodeName);

export type { ValidatableHTMLElement };
export {
	isEmpty,
	isTrue,
	isUndefined,
	isFalsyExcludingZero,
	camel2KebabCase,
	cn,
	isValidatableHTMLElement,
};
