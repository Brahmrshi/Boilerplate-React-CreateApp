import type { Meta, StoryObj } from '@storybook/react';
import ExampleButton from '../components/ExampleButton';

const meta: Meta<typeof ExampleButton> = {
  title: 'Example/Button',
  component: ExampleButton,
};
export default meta;

type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    label: 'Click me',
  },
};
