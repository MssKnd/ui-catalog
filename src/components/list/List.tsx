import { ReactNode } from "react";
import { ListItem } from "./ListItem.tsx";

type BaseProps = {
	children: ReactNode;
};

const BaseList = ({ children }: BaseProps) => <ul>{children}</ul>;

type Props = {
	items: {
		id: string;
		item: ReactNode;
	}[];
};

const List = ({ items }: Props) => {
	if (!items.length) {
		return <>empty state</>;
	}

	return (
		<BaseList>
			{items.map(({ id, item }) => (
				<ListItem key={id}>{item}</ListItem>
			))}
		</BaseList>
	);
};

export { List, BaseList };
