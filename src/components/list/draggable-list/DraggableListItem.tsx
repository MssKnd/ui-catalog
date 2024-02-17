import { memo, ReactNode } from "react";

const DraggableListItem = memo(({ children }: { children: ReactNode }) => (
	<li draggable>{children}</li>
));

const DropZone = memo(({ onDrop }: { onDrop: () => void }) => (
	<div
		className="drop-zone"
		onDrop={onDrop}
		onDragOver={(e) => {
			e.currentTarget.className = "drop-zone drag-over";
		}}
		onDragLeave={(e) => {
			e.currentTarget.className = "drop-zone";
		}}
	/>
));

export { DraggableListItem, DropZone };
