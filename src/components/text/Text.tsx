import { ReactNode } from "react";
import { cn } from "../shared/utils.ts";
import "./text.css";

type Props = {
	fontSize?: "s" | "m" | "l";
	maxWidth?: string;
	children: ReactNode;
};

const Text = ({ fontSize = "m", maxWidth, children }: Props) => (
	<p className={cn("text", { fontSize })} style={{ maxWidth }}>
		{children}
	</p>
);

export { Text };
