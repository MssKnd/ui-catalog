import { useState, BaseSyntheticEvent } from "react";
import "./tooltip.css";
import {
	BaseTooltip,
	Position,
	positionCalc,
	BaseTooltipProps,
} from "./BaseTooltip.tsx";

const InteractiveTooltip = ({
	children,
	content,
	position = "top",
}: BaseTooltipProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const showTooltip =
		(position: Position) => (event: BaseSyntheticEvent<{}, HTMLDivElement>) => {
			setIsVisible(true);
			const container = event.currentTarget;
			positionCalc(container, position);
		};
	const hideTooltip = () => setIsVisible(false);

	return (
		<BaseTooltip
			isVisible={isVisible}
			content={content}
			position={position}
			showTooltip={showTooltip}
			hideTooltip={hideTooltip}
		>
			{children}
		</BaseTooltip>
	);
};

export { InteractiveTooltip };
