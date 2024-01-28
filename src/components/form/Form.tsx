import { ReactNode } from "react";
import "./form.css";

type Props = {
	horizontal?: boolean;
	children: ReactNode;
};

const Form = ({ horizontal = undefined, children }: Props) => <form data-horizontal={horizontal}>{children}</form>;

Form.Footer = ({ children }: Props) => <footer>{children}</footer>;

export { Form };
