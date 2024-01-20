import { ReactNode } from "react";
import "./form.css";

type Props = {
	children: ReactNode;
};

const Form = ({ children }: Props) => <form>{children}</form>;

export { Form };
