import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../text-field";
import { Validation } from "./Validation.tsx";

const meta = {
	title: "Components/Forms/Validation",
	component: Validation,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Validation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => <Validation {...args} />,
	args: {
		input: (ref) => (
			<TextField ref={ref} required minLength={3} maxLength={5} />
		),
	},
};
