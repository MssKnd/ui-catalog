import { FormEventHandler, ReactNode, useRef } from "react";
import "./form.css";

type Props = {
	id?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	horizontal?: boolean;
	children: ReactNode;
};

const Form = ({ id, onSubmit, horizontal = undefined, children }: Props) => {
	const ref = useRef<HTMLFormElement>(null);
	return (
		<form id={id} ref={ref} onSubmit={onSubmit} data-horizontal={horizontal}>
			{children}
		</form>
	);
};

Form.Footer = ({ children }: { children: ReactNode }) => (
	<footer>{children}</footer>
);

export { Form };
