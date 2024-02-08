import { ReactElement, useEffect, useRef, useState } from "react";
import { Icon } from "../icon";
import { TextField } from "../text-field";
import { Tooltip } from "../tooltip";
import { Text } from "../text/Text.tsx";
import {
	cn,
	isValidatableHTMLElement,
	ValidatableHTMLElement,
} from "../shared/utils.ts";
import { GOLDEN_RATIO } from "../shared/constants.ts";
import "./validation.css";

type Props = {
	/** single child */
	children: ReactElement;
};

type ValidationState = "valid" | "invalid" | "Unvalidated";
type Validation = {
	message: string;
	valid: ValidationState;
};

const Validation = ({ children }: Props) => {
	const ref = useRef<ValidatableHTMLElement | null>(null);
	const handleRef = (container: HTMLDivElement) => {
		if (!container) return;
		const element = container.querySelector("input, textarea, select");
		if (
			ref.current === element ||
			!(element && isValidatableHTMLElement(element))
		)
			return;
		ref.current = element;
	};

	const [{ message, valid }, setValidation] = useState<Validation>({
		message: "",
		valid: "Unvalidated",
	});
	const maxWidth =
		Math.round(
			(ref.current?.getBoundingClientRect().width || 300) * GOLDEN_RATIO,
		) + "px";

	useEffect(() => {
		const validatableElement = ref.current;
		if (!validatableElement) return;
		const checkValidation = () => {
			setValidation({
				message: validatableElement.validationMessage,
				valid: checkState(validatableElement.validity.valid),
			});
		};

		validatableElement.addEventListener("input", checkValidation);

		return () => {
			validatableElement.removeEventListener("input", checkValidation);
		};
	}, [ref]);

	const validationResult = validationResultMap[valid];

	return (
		<Tooltip
			ref={handleRef}
			position="right"
			content={validationResult(maxWidth, message)}
		>
			{children}
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
		<div {...cn("valid")}>
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
