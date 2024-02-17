import type { Meta, StoryObj } from "@storybook/react";
import { SelectableList } from "./SelectableList.tsx";

const meta = {
	title: "Components/List/SelectableList",
	component: SelectableList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		name: "fruit",
		items: [
			{
				value: "apple",
				label: "Apple",
				selected: true,
			},
			{
				value: "lemon",
				label: "Lemon",
			},
			{
				value: "orange",
				label: "Orange",
			},
			{
				value: "melon",
				label: "Melon",
			},
			{
				value: "grape",
				label: "Grape",
			},
		],
	},
} satisfies Meta<typeof SelectableList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
