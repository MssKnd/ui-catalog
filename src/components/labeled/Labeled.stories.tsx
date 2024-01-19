import type {Meta, StoryObj} from "@storybook/react";
import {Labeled} from "./Labeled.tsx";

const meta = {
  title: 'Components/Forms/Labeled',
  component: Labeled,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Label',
  },
} satisfies Meta<typeof Labeled>;

export default meta;

// @ts-ignore
Labeled.TextField.displayName = 'Labeled.TextField';
export const TextField: StoryObj<typeof Labeled.TextField> = {
  render: (args) => <Labeled.TextField {...args} />,
};