import { BaseList } from "../List.tsx";
import { SelectableListItem } from "./SelectableListItem.tsx";

type Props = {
	name: string;
	items: {
		value: string;
		label: string;
		selected?: boolean;
	}[];
};

const SelectableList = ({ name, items }: Props) => {
	if (!items.length) {
		return <>empty state</>;
	}

	return (
		<BaseList>
			{items.map(({ value, label, selected = false }) => (
				<SelectableListItem
					key={value}
					id={value}
					name={name}
					label={label}
					selected={selected}
				/>
			))}
		</BaseList>
	);
};

export { SelectableList };
