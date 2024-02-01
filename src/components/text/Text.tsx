import { ReactNode } from "react";
import { cn } from "../shared/utils.ts";
import "./text.css";

type Props = {
	fontSize?: "s" | "m" | "l";
	children: ReactNode;
};

const Text = ({ fontSize = "m", children }: Props) => (
	<p className={cn("text", { fontSize })}>{children}</p>
);

export { Text };
