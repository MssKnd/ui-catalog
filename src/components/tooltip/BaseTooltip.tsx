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

const isEmpty = (obj: object) => Object.keys(obj).length === 0;

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

		if (!content || (typeof content === "object" && isEmpty(content)))
			return <>{children}</>;

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
				<div id={id} role="tooltip" aria-hidden={!isVisible}>
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
	`top: -${tooltipRect.height + MARGIN_PX}px;` +
	`left: ${rect.width / 2 - tooltipRect.width / 2}px;`;

const right = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: ${rect.height / 2 - tooltipRect.height / 2}px;` +
	`left: ${rect.width + MARGIN_PX}px;`;

const POS = {
	top,
	right,
} as const;

export type { Position, Props as TooltipProps };
export { BaseTooltip, positionCalc, isEmpty };
