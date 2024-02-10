import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SearchField, SearchFieldProps } from "./SearchField.tsx";

type Props = ComponentProps<typeof SearchField> & SearchFieldProps;

const meta = {
	title: "Components/Forms/SearchField",
	component: SearchField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		onBlur: { control: false },
		onChange: { control: false },
		ref: { control: false },
	},
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
