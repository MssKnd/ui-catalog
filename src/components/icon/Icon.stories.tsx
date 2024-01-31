import type { Meta, StoryObj } from "@storybook/react";
import {Icon} from "./Icon.tsx";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "m",
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["s", "m", "l"],
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon.Github>;

// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Github.displayName = "Icon.Github";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Trash.displayName = "Icon.Trash";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Check.displayName = "Icon.Check";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Info.displayName = "Icon.Info";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Warning.displayName = "Icon.Warning";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Error.displayName = "Icon.Error";
// @ts-expect-error: StoryObj type is not compatible with Story type
Icon.Calender.displayName = "Icon.Calender";

export const Default: Story = {
  render: (args) => <>
    <Icon.Github {...args}/>
    <Icon.Trash {...args}/>
    <Icon.Check {...args}/>
    <Icon.Info {...args}/>
    <Icon.Warning {...args}/>
    <Icon.Error {...args}/>
    <Icon.Calender {...args}/>
  </>,
};
