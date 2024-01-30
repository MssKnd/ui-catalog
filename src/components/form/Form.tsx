import { FormEventHandler, ReactNode } from "react";
import "./form.css";

type Props = {
	id?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	horizontal?: boolean;
	children: ReactNode;
};

const Form = ({ id, onSubmit, horizontal = undefined, children }: Props) => (
	<form id={id} onSubmit={onSubmit} data-horizontal={horizontal}>
		{children}
	</form>
);

Form.Footer = ({ children }: { children: ReactNode }) => (
	<footer>{children}</footer>
);

export { Form };
