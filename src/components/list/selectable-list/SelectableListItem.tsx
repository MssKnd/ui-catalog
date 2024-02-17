import { forwardRef } from "react";

type Props = {
	id: string;
	name: string;
	label: string;
	selected: boolean;
};

const SelectableListItem = forwardRef<HTMLInputElement, Props>(
	({ id, label, selected, name }, ref) => {
		return (
			<li>
				<input
					ref={ref}
					id={id}
					name={name}
					type="checkbox"
					value={id}
					defaultChecked={selected}
				/>
				<label htmlFor={id}>{label}</label>
			</li>
		);
	},
);

export { SelectableListItem };
