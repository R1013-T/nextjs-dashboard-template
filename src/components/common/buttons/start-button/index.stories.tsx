import type { Meta, StoryObj } from '@storybook/react'

import GetStartedButton from '.'

const meta = {
  title: 'StartButton',
  component: GetStartedButton,
} as Meta<typeof GetStartedButton>

export default meta

type Story = StoryObj<typeof GetStartedButton>

export const Default: Story = {
  args: {
    type: 'default',
  },
}

export const Outline: Story = {
  args: {
    type: 'outline',
  },
}
