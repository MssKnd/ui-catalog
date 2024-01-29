import {ReactNode, useId, useState, BaseSyntheticEvent} from "react";
import "./tooltip.css";

type Props = {
	content?: ReactNode;
	position?: "top" | "right"; // | "bottom" | "left";
	children: ReactNode;
};

/** Tooltip */
const Tooltip = ({ children, content, position = "top" }: Props) => {
	const id = useId();
	const [isVisible, setIsVisible] = useState(false);

	if (!content) return <>{children}</>;

	const showTooltip = (event: BaseSyntheticEvent<{}, HTMLDivElement>) => {
		setIsVisible(true);
		const container = event.currentTarget;
		const rect = container.getBoundingClientRect();
		const tooltip = container.lastElementChild;
		if (!rect || !tooltip) return;
		const tooltipRect = tooltip.getBoundingClientRect();
		tooltip.setAttribute("style", POS[position](rect, tooltipRect));
	};
	const hideTooltip = () => setIsVisible(false);

	return (
		<div
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
			onFocus={showTooltip}
			onBlur={hideTooltip}
			aria-describedby={id}
		>
			{children}
			<div
				id={id}
				role="tooltip"
				aria-hidden={!isVisible}
			>
				{content}
			</div>
		</div>
	);
};

const MARGIN_PX = 10;

const top = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: -${tooltipRect.height + MARGIN_PX}px;` +
	`left: ${rect.width / 2 - tooltipRect.width / 2}px;`;

const right = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: ${rect.height / 2 - tooltipRect.height / 2}px;` +
	`left: ${rect.width + MARGIN_PX}px;`;

const POS = {
	top,
	right,
} as const;

export { Tooltip };
