import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip.tsx";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: { type: 'radio' },
			options: ['top', 'right'],
		}
	}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		content: `Tooltip`,
		children: `Text`,
	},
};
