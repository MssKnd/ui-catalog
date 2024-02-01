import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { Icon } from "../icon";
import { TextField } from "../text-field";
import { Tooltip } from "../tooltip";
import { Text } from "../text/Text.tsx";
import { cn } from "../shared/utils.ts";
import { GOLDEN_RATIO } from "../shared/constants.ts";
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
			(inputRef.current?.getBoundingClientRect().width || 300) * GOLDEN_RATIO,
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
		<div className={cn("valid")}>
			<Icon.Check />
		</div>
	),
	invalid: (maxWidth: string, message: string) => (
		<div role="alert">
			<Icon.Error />
			<Text fontSize="s" maxWidth={maxWidth}>
				{message}
			</Text>
		</div>
	),
};

export { TextField, Validation };
