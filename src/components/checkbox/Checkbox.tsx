import { useId } from "react";
import "./checkbox.css";
import { cn } from "../shared/utils.ts";

type Props = {
	name: string;
	vertical?: boolean;
	defaultValues?: string[];
	options: Omit<CheckboxProps, "name" | "defaultChecked">[];
};

type CheckboxProps = {
	name: string;
	label: string;
	value: string;
	defaultChecked?: boolean;
	disabled?: boolean;
};

const ChechboxGroup = ({
	name,
	vertical = false,
	defaultValues,
	options,
}: Props) => (
	<div {...cn("", { vertical })}>
		{options.map((option) => (
			<Checkbox
				key={option.value}
				name={name}
				{...option}
				defaultChecked={defaultValues?.includes(option.value)}
			/>
		))}
	</div>
);

const Checkbox = ({ label, ...props }: CheckboxProps) => {
	const id = useId();
	return (
		<div>
			<input type="checkbox" id={id} {...props} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export { ChechboxGroup };
