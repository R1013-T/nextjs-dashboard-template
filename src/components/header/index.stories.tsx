import type { Meta, StoryObj } from '@storybook/react'

import Header from '.'

const meta = {
  title: 'Header',
  component: Header,
} as Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const Top: Story = {
  args: {
    type: 'top',
  },
}
