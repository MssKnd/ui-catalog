type Props = {
	id: string;
	name: string;
	label: string;
	selected: boolean;
};

const SelectableListItem = ({ id, label, selected, name }: Props) => {
	return (
		<li>
			<input
				id={id}
				name={name}
				type="checkbox"
				value={id}
				defaultChecked={selected}
			/>
			<label htmlFor={id}>{label}</label>
		</li>
	);
};

export { SelectableListItem };
