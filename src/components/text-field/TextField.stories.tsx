import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from "./TextField.tsx";

type Props = ComponentProps<typeof TextField> & TextFieldProps;

const meta = {
	title: "Components/Forms/TextField",
	component: TextField,
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
