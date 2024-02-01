const isEmpty = (obj: object) => Object.keys(obj).length === 0;
const isTrue = (value: unknown): value is true =>
	typeof value === "boolean" && value;

const isUndefined = (value: unknown): value is undefined =>
	typeof value === "undefined";

type PropType = string | number | boolean | undefined;
type Prop = Record<string, PropType>;

const classNames = (props: Prop) =>
	Object.entries(props).flatMap(convertClassName).join(" ");

const convertClassName = ([name, value]: [string, PropType]) => {
	if (isUndefined(value)) return [];
	if (isTrue(value)) return [name];
	return [`${name}:${value}`];
};

export { isEmpty, isTrue, isUndefined, classNames };
