import type {Meta, StoryObj} from "@storybook/react";
import {Form} from "./form.tsx";
import {Labeled} from "../labeled/Labeled.tsx";

const meta = {
  title: 'Components/Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => <Form>
    <Labeled.TextField label='label' />
    <Labeled.TextField label='label' />
  </Form>,
};
