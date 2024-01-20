import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button.tsx";
import { Form } from "../form";
import { Labeled } from "../labeled/Labeled.tsx";
import { ModalProvider } from "./ModalProvider.tsx";
import { useModal } from "./useModal.tsx";

const ModalContent = ({ label }: { label: string }) => (
	<Form>
		<Labeled.TextField label={label} />
		<Labeled.TextField label="label 2" />
	</Form>
);

const Demo = () => {
	const { openModal } = useModal({ content: ModalContent, type: "submit" });

	return <Button onClick={openModal({ label: "test" })} label="Open modal" />;
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
	args: {},
} satisfies Meta<typeof useModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
