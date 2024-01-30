import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button.tsx";
import { Form } from "../form";
import { Labeled } from "../labeled/Labeled.tsx";
import { ModalProvider } from "./ModalProvider.tsx";
import { useModal } from "./useModal.tsx";
import { ModalType } from "./Modal.tsx";

const ModalContent = ({ label }: { label: string }) => (
	<Form>
		<Labeled.TextField label={label} />
		<Labeled.TextField label="label 2" />
	</Form>
);

const Demo = ({ type }: { type: ModalType }) => {
	const { openModal } = useModal({ content: ModalContent, type });

	return <Button onClick={openModal({ label: "test" })} label="Modal Open" />;
};

const meta = {
	title: "Components/Modal",
	component: Demo,
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<ModalProvider>
				<Story />
			</ModalProvider>
		),
	],
	tags: ["autodocs"],
	args: {
		type: "submit",
	},
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["dialog", "danger", "confirm", "submit"],
		},
	},
} satisfies Meta<typeof useModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
