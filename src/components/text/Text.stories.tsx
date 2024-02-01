import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text.tsx";

const meta = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children:
			"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
