import {
	ReactNode,
	useId,
	BaseSyntheticEvent,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
	memo,
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
const BaseTooltip: BaseTooltip = memo(
	forwardRef(
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
	),
);

const MARGIN_PX = 10;

const top = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: -${Math.round(tooltipRect.height) + MARGIN_PX}px;` +
	`left: ${Math.round(rect.width / 2 - tooltipRect.width / 2)}px;`;

const right = (rect: DOMRect, tooltipRect: DOMRect) =>
	`top: ${Math.round(rect.height / 2 - tooltipRect.height / 2)}px;` +
	`left: ${Math.round(rect.width) + MARGIN_PX}px;`;

const POS = {
	top,
	right,
} as const;

const positionCalc = (container: HTMLDivElement, position: Position) => {
	const target = container.firstChild; // target is possibly a text node not an element
	const tooltip = container.lastElementChild;
	if (!tooltip || !target) return;
	const range = document.createRange();
	range.selectNode(target);
	const targetRect = range.getBoundingClientRect();
	const tooltipRect = tooltip.getBoundingClientRect();
	tooltip.setAttribute("style", POS[position](targetRect, tooltipRect));
};

export type { Position, Props as BaseTooltipProps };
export { BaseTooltip, positionCalc };
