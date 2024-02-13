import type { Meta, StoryObj } from '@storybook/react'

import TopNav from '.'

const meta = {
  title: 'TopNav',
  component: TopNav,
} as Meta<typeof TopNav>

export default meta

type Story = StoryObj<typeof TopNav>

export const Default: Story = {}
