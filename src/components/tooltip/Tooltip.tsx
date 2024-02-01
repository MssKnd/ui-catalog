import { useRef, useEffect } from "react";
import { isEmpty } from "../shared/utils.ts";
import { BaseTooltip, positionCalc, TooltipProps } from "./BaseTooltip.tsx";
import "./tooltip.css";

const Tooltip = ({ children, content, position = "top" }: TooltipProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible =
		!!content && !(typeof content === "object" && isEmpty(content));

	useEffect(() => {
		const container = ref.current;
		if (!container) return;
		positionCalc(container, position);
	}, [ref, position, content, children]);

	return (
		<BaseTooltip
			ref={ref}
			isVisible={isVisible}
			content={content}
			position={position}
		>
			{children}
		</BaseTooltip>
	);
};

export { Tooltip };
