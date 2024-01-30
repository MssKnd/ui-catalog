import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { TextField } from "../text-field";
import { Tooltip } from "../tooltip";
import "./validation-error.css";

type ValidationErrorHandlerProps<T extends HTMLInputElement> = {
	input: (ref: RefObject<T>) => ReactNode;
};

const ValidationError = <T extends HTMLInputElement>({
	input,
}: ValidationErrorHandlerProps<T>) => {
	const inputRef = useRef<T>(null);
	const [validationMessage, setValidationMessage] = useState<string>("");
	const Input = input(inputRef);

	useEffect(() => {
		const element = inputRef.current;
		if (!element) return;
		const checkValidation = () => {
			setValidationMessage(element.validationMessage);
		};

		element.addEventListener("input", checkValidation);

		return () => {
			element.removeEventListener("input", checkValidation);
		};
	}, [input]);

	return (
		<Tooltip
			position="right"
			content={
				validationMessage ? <p role="alert">{validationMessage}</p> : undefined
			}
		>
			{Input}
		</Tooltip>
	);
};

export { TextField, ValidationError };
