import {FormEventHandler, ReactNode} from "react";
import "./form.css";

type Props = {
	onSubmit?: FormEventHandler<HTMLFormElement>;
	horizontal?: boolean;
	children: ReactNode;
};

const Form = ({ onSubmit, horizontal = undefined, children }: Props) =>
	<form onSubmit={onSubmit} data-horizontal={horizontal}>{children}</form>;

Form.Footer = ({ children }: Props) => <footer>{children}</footer>;

export { Form };
