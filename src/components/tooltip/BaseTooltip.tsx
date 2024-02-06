import {
	ReactNode,
	useId,
	BaseSyntheticEvent,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from "react";
import "./tooltip.css";

type Position = "top" | "right"; // | "bottom" | "left";

type Props = {
	content?: ReactNode;
	position?: Position;
	children: ReactNode;
};

type BaseProps = {
	isVisible: boolean;
	showTooltip?: (
		position: Position,
	) => (event: BaseSyntheticEvent<{}, HTMLDivElement>) => void;
	hideTooltip?: () => void;
};

type BaseTooltip = ForwardRefExoticComponent<
	Props & BaseProps & RefAttributes<HTMLDivElement>
>;

/** Tooltip */
const BaseTooltip: BaseTooltip = forwardRef(
	(
		{
			children,
			content,
			position = "top",
			isVisible,
			showTooltip,
			hideTooltip,
		},
		ref,
	) => {
		const id = useId();
		const isTextNode = typeof content === "string";

		return (
			<div
				ref={ref}
				onMouseEnter={showTooltip?.(position)}
				onMouseLeave={hideTooltip}
				onFocus={showTooltip?.(position)}
				onBlur={hideTooltip}
				aria-describedby={id}
			>
				{children}
				<div
					id={id}
					role="tooltip"
					aria-hidden={!isVisible}
					data-is-text={isTextNode}
				>
					{content}
				</div>
			</div>
		);
	},
);

const MARGIN_PX = 10;

const positionCalc = (container: HTMLDivElement, position: Position) => {
	const rect = container.getBoundingClientRect();
	const tooltip = container.lastElementChild;
	if (!rect || !tooltip) return;
	const tooltipRect = tooltip.getBoundingClientRect();
	tooltip.setAttribute("style", POS[position](rect, tooltipRect));
};

const top = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: ${tooltipRect.height + MARGIN_PX}px;` +
	`left: ${Math.round(rect.width / 2 - tooltipRect.width / 2) + MARGIN_PX}px;`;

const right = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: ${Math.round(rect.height / 2 - tooltipRect.height / 2)}px;` +
	`left: ${rect.width + MARGIN_PX}px;`;

const POS = {
	top,
	right,
} as const;

export type { Position, Props as TooltipProps };
export { BaseTooltip, positionCalc };
