import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	render: (args) => <Button.Primary {...args} />,
	args: {
		label: "Button",
	},
};

export const Normal: Story = {
	args: {
		label: "Button",
	},
};

export const Danger: Story = {
	render: (args) => <Button.Danger {...args} />,
	args: {
		label: "Button",
	},
};

export const Large: Story = {
	args: {
		size: "l",
		label: "Button",
	},
};

export const Small: Story = {
	args: {
		size: "s",
		label: "Button",
	},
};
