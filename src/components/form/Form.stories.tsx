import type { Meta, StoryObj } from "@storybook/react";
import { Labeled } from "../labeled/Labeled.tsx";
import { Form } from "./Form.tsx";
import { Button } from "../button/Button.tsx";

const meta = {
	title: "Components/Forms/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		onSubmit: (event) => event.preventDefault(),
	},
} satisfies Meta<typeof Form>;

const checkboxOptions = [
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
];

export default meta;

// @ts-expect-error: StoryObj type is not compatible with Story type
Form.Footer.displayName = "Form.Footer";
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: (args) => (
		<Form {...args}>
			<Labeled.TextField label="label 1" required />
			<Labeled.TextField label="label 2" />
			<Labeled.CheckboxGroup label="label 3" options={checkboxOptions} />
			<Form.Footer>
				<Button.Submit label="Submit" />
			</Form.Footer>
		</Form>
	),
	args: {
		children: undefined,
	},
};

export const Horizontal: Story = {
	render: (args) => (
		<Form {...args}>
			<Labeled.TextField label="label 1" required />
			<Labeled.TextField label="label 2" />
			<Labeled.CheckboxGroup label="label 3" options={checkboxOptions} />
			<Form.Footer>
				<Button.Submit label="Submit" />
			</Form.Footer>
		</Form>
	),
	args: {
		horizontal: true,
		children: undefined,
	},
};
