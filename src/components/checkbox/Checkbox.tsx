import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	ForwardRefExoticComponent,
	Ref,
	RefAttributes,
	useId,
	MouseEventHandler,
} from "react";
import "./checkbox.css";
import { cn, isHTMLElement } from "../shared/utils.ts";

type CheckboxProps = {
	name?: string;
	label: string;
	value: string;
	defaultChecked?: boolean;
	disabled?: boolean;
};

type Option = Omit<CheckboxProps, "name" | "defaultChecked">;

type Props = {
	/** If there are more than 3 - 5 choices, use the select box */
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

		const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
			if (!isHTMLElement(e.currentTarget.firstElementChild)) return;
			e.currentTarget.firstElementChild?.click();
			e.stopPropagation();
		};

		return (
			<div onClick={onClick}>
				<input ref={ref} type="checkbox" id={id} {...props} />
				<label htmlFor={id}>{label}</label>
			</div>
		);
	},
);

export type { Option as CheckboxOption, Props as CheckboxGroupProps };
export { CheckboxGroup };
