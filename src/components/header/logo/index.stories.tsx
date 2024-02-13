import type { Meta, StoryObj } from '@storybook/react'

import HeaderLogo from '.'

const meta = {
  title: 'HeaderLogo',
  component: HeaderLogo,
} as Meta<typeof HeaderLogo>

export default meta

type Story = StoryObj<typeof HeaderLogo>

export const Default: Story = {}
