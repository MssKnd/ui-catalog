import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from "react";

type Props = {
	id?: string;
	name?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
};

type TextField = ForwardRefExoticComponent<
	Props & RefAttributes<HTMLInputElement>
>;

const defaultProps = {
	value: ""
}

/** Text field */
const TextField: TextField = forwardRef((props = defaultProps, ref) => {
	return <input ref={ref} type="text" {...props} />;
});

export type { Props as TextFieldProps };
export { TextField };
