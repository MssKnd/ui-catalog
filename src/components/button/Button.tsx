import "./button.css";

type Props = {
	/** Button contents */
	label: string;
	priority?: "primary" | "normal" | "error";
	/** How large should the button be? */
	size?: "s" | "m" | "l";
	/** Optional click handler */
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	autoFocus?: boolean;
};

const BaseButton = ({
	label,
	size = "m",
	type = "button",
	priority = "normal",
	...props
}: Props) => (
	<button {...props} data-priority={priority} data-size={size}>
		{label}
	</button>
);

const Button = ({ ...props }: Omit<Props, "priority" | "submit">) => (
	<BaseButton {...props} />
);

Button.Primary = ({ ...props }: Omit<Props, "priority" | "submit">) => (
	<BaseButton {...props} priority="primary" />
);

Button.Submit = ({ ...props }: Omit<Props, "priority" | "submit">) => (
	<BaseButton {...props} priority="primary" type="submit" />
);

export { Button };
