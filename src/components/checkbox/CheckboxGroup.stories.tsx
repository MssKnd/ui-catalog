import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./Checkbox.tsx";

const meta = {
	title: "Components/Forms/CheckboxGroup",
	component: CheckboxGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		name: "checkbox",
		defaultValues: ["apple", "grape"],
		options: [
			{
				label: "Apple",
				value: "apple",
			},
			{
				label: "Lemon",
				value: "lemon",
			},
			{
				label: "Orange",
				value: "orange",
			},
			{
				label: "Melon",
				value: "melon",
				disabled: true,
			},
			{
				label: "Grape",
				value: "grape",
				disabled: true,
			},
		],
	},
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
