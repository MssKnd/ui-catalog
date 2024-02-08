import {
	useRef,
	useEffect,
	ForwardRefExoticComponent,
	RefAttributes,
	forwardRef,
	useImperativeHandle,
	memo,
} from "react";
import { isEmpty } from "../shared/utils.ts";
import { BaseTooltip, positionCalc, BaseTooltipProps } from "./BaseTooltip.tsx";
import "./tooltip.css";

type Props = ForwardRefExoticComponent<
	BaseTooltipProps & RefAttributes<HTMLDivElement>
>;

const Tooltip: Props = memo(
	forwardRef(({ children, content, position = "top" }, ref) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const isVisible =
			!!content && !(typeof content === "object" && isEmpty(content));

		useImperativeHandle(ref, () => containerRef.current!, [containerRef]);

		useEffect(() => {
			const container = containerRef.current;
			if (!container) return;
			positionCalc(container, position);
		}, [containerRef, position, content, children]);

		return (
			<BaseTooltip
				ref={containerRef}
				isVisible={isVisible}
				content={content}
				position={position}
			>
				{children}
			</BaseTooltip>
		);
	}),
);

export { Tooltip };
