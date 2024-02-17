import { ReactNode, useState } from "react";
import { DraggableListItem, DropZone } from "./DraggableListItem.tsx";
// import { BaseList } from "../List.tsx";
import "./draggable-list.css";

type Props = {
	items: {
		id: string;
		item: ReactNode;
	}[];
};

const className = "draggable-list";

const DraggableList = ({ items }: Props) => {
	const [isDragging, setIsDragging] = useState(false);

	if (!items.length) {
		return <>empty state</>;
	}

	const onDrop =
		(id = "last") =>
		() => {
			console.log(`Dropped item with id: ${id}`);
		};

	return (
		<ul
			className={className}
			onDragOver={() => {
				setIsDragging(true);
			}}
			onDragLeave={() => {
				setIsDragging(false);
			}}
		>
			{items.map(({ id, item }) => (
				<DraggableListItem key={id}>
					{/*<DropZone onDrop={onDrop(id)}/>*/}
					{isDragging && <DropZone onDrop={onDrop(id)} />}
					{item}
				</DraggableListItem>
			))}
			{/*<DropZone onDrop={onDrop()}/>*/}
			{isDragging && <DropZone onDrop={onDrop()} />}
		</ul>
	);
};

export { DraggableList };
