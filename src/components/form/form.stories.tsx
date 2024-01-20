import type { Meta, StoryObj } from "@storybook/react";
import { Labeled } from "../labeled/Labeled.tsx";
import { Form } from "./form.tsx";

const meta = {
	title: "Components/Forms/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: (_) => (
		<Form>
			<Labeled.TextField label="label 1" />
			<Labeled.TextField label="label 2" />
		</Form>
	),
	args: {
		children: undefined,
	},
};
