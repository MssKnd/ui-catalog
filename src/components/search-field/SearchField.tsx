import {
	ChangeEventHandler,
	FocusEventHandler,
	ForwardRefExoticComponent,
	RefAttributes,
	forwardRef,
	memo,
} from "react";
import "./search-field.css";

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

type SearchField = ForwardRefExoticComponent<
	Props & RefAttributes<HTMLInputElement>
>;

/** Text field */
const SearchField: SearchField = memo(
	forwardRef(({ value = "", ...props }, ref) => (
		<input ref={ref} type="search" {...props} defaultValue={value} />
	)),
);

export type { Props as SearchFieldProps };
export { SearchField };
