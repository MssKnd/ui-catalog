import { ReactNode, useId } from "react";
import { TextField, TextFieldProps } from "../text-field/TextField.tsx";
import "./labeled.css";
import { Validation } from "../validation/Validation.tsx";
import { CheckboxGroup, CheckboxGroupProps } from "../checkbox/Checkbox.tsx";

type BaseProps = {
	label: string;
};

type Props = BaseProps & {
	/** Set any input element */
	input: (id: string) => ReactNode;
};

/** Form attached label */
const Labeled = ({ label, input }: Props) => {
	const id = useId();
	return (
		<div className="labeled-form">
			<label htmlFor={id}>{label}</label>
			{input(id)}
		</div>
	);
};

Labeled.TextField = ({ label, ...props }: BaseProps & TextFieldProps) => (
	<Labeled
		label={label}
		input={(id) => (
			<Validation>
				<TextField id={id} {...props} />
			</Validation>
		)}
	/>
);
// @ts-expect-error:
Labeled.TextField.displayName = "Labeled.TextField";

Labeled.CheckboxGroup = ({
	label,
	...props
}: BaseProps & CheckboxGroupProps) => (
	<Labeled
		label={label}
		input={() => (
			<Validation>
				<CheckboxGroup {...props} />
			</Validation>
		)}
	/>
);
// @ts-expect-error:
Labeled.CheckboxGroup.displayName = "Labeled.CheckboxGroup";

export { Labeled };
