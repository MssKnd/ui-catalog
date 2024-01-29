import {TextField} from "../text-field";
import {Meta, StoryObj} from "@storybook/react";
import {ValidationError} from "./ValidationError.tsx";


const meta = {
  title: "Components/Forms/VaidationError",
  component: ValidationError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ValidationError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({input}) => (<ValidationError input={input} />),
  args: {
    input: (ref) => <TextField ref={ref} required />,
  }
};
