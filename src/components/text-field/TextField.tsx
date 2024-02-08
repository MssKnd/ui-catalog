import {
	ChangeEventHandler,
	FocusEventHandler,
	ForwardRefExoticComponent,
	RefAttributes,
	forwardRef,
	memo,
} from "react";
import "./text-field.css";

type Props = {
	id?: string;
	name?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	placeholder?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	readOnly?: boolean;
	required?: boolean;
	pattern?: string;
	minLength?: number;
	maxLength?: number;
};

type TextField = ForwardRefExoticComponent<
	Props & RefAttributes<HTMLInputElement>
>;

/** Text field */
const TextField: TextField = memo(
	forwardRef(({ value = "", ...props }, ref) => {
		console.log("test");
		return <input ref={ref} type="text" {...props} defaultValue={value} />;
	}),
);

export type { Props as TextFieldProps };
export { TextField };
