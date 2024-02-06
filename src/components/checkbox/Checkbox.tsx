import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	ForwardRefExoticComponent,
	Ref,
	RefAttributes,
	useId,
} from "react";
import "./checkbox.css";
import { cn } from "../shared/utils.ts";

type CheckboxProps = {
	name?: string;
	label: string;
	value: string;
	defaultChecked?: boolean;
	disabled?: boolean;
};

type Option = Omit<CheckboxProps, "name" | "defaultChecked">;

type Props = {
	options: Option[];
	name?: string;
	vertical?: boolean;
	defaultValues?: string[];
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	disabled?: boolean;
	ref?: Ref<HTMLInputElement>;
};

const CheckboxGroup = ({
	name,
	vertical = false,
	defaultValues,
	options,
	disabled,
	...props
}: Props) => (
	<div {...cn("", { vertical })}>
		{options.map((option) => (
			<Checkbox
				key={option.value}
				name={name}
				{...option}
				{...props}
				disabled={disabled || option.disabled}
				defaultChecked={defaultValues?.includes(option.value)}
			/>
		))}
	</div>
);

type Checkbox = ForwardRefExoticComponent<
	CheckboxProps & RefAttributes<HTMLInputElement>
>;

const Checkbox: Checkbox = forwardRef(
	({ label, ...props }: CheckboxProps, ref) => {
		const id = useId();
		return (
			<div>
				<input ref={ref} type="checkbox" id={id} {...props} />
				<label htmlFor={id}>{label}</label>
			</div>
		);
	},
);

export type { Option as CheckboxOption, Props as CheckboxGroupProps };
export { CheckboxGroup };