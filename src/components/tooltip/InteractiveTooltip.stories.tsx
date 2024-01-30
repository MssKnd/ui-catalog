import type { Meta, StoryObj } from "@storybook/react";
import { InteractiveTooltip } from ".";

const meta = {
	title: "Components/Tooltip/InteractiveTooltip",
	component: InteractiveTooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: { type: "radio" },
			options: ["top", "right"],
		},
	},
} satisfies Meta<typeof InteractiveTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		content: `Tooltip`,
		children: `Text`,
	},
};
