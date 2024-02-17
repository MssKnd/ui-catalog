import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List.tsx";

const meta = {
	title: "Components/List/List",
	component: List,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		items: [
			{
				item: "Apple",
				id: "apple",
			},
			{
				item: "Lemon",
				id: "lemon",
			},
			{
				item: "Orange",
				id: "orange",
			},
			{
				item: "Melon",
				id: "melon",
			},
			{
				item: "Grape",
				id: "grape",
			},
		],
	},
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
