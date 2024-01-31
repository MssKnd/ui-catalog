import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Icon } from "../icon";
import { TextField } from "../text-field";
import { Tooltip } from "../tooltip";
import "./validation.css";

type ValidationProps<T extends HTMLInputElement> = {
	input: (ref: RefObject<T>) => ReactNode;
};

type ValidationState = "valid" | "invalid" | "Unvalidated";
type Validation = {
	message: string;
	valid: ValidationState;
};

const Validation = <T extends HTMLInputElement>({
	input,
}: ValidationProps<T>) => {
	const inputRef = useRef<T>(null);
	const [validation, setValidation] = useState<Validation>({
		message: "",
		valid: "Unvalidated",
	});
	const Input = input(inputRef);
	const maxWidth =
		Math.round(
			(inputRef.current?.getBoundingClientRect().width || 300) * 1.25,
		) + "px";

	useEffect(() => {
		const element = inputRef.current;
		if (!element) return;
		const checkValidation = () => {
			setValidation({
				message: element.validationMessage,
				valid: checkState(element.validity.valid),
			});
		};

		element.addEventListener("input", checkValidation);

		return () => {
			element.removeEventListener("input", checkValidation);
		};
	}, [input]);

	return (
		<Tooltip
			position="right"
			content={validationResultMap[validation.valid](
				maxWidth,
				validation.message,
			)}
		>
			{Input}
		</Tooltip>
	);
};

const checkState = (state: boolean | undefined) => {
	if (state) return "valid";
	if (state === false) return "invalid";
	return "Unvalidated";
};

const validationResultMap = {
	Unvalidated: () => <></>,
	valid: () => (
		<div data-valid={true}>
			<Icon.Check />
		</div>
	),
	invalid: (maxWidth: string, message: string) => (
		<p role="alert" data-valid={false}>
			<Icon.Error />
			<span style={{ maxWidth }}>{message}</span>
		</p>
	),
};

export { TextField, Validation };
