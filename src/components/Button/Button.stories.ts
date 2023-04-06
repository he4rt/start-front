import type { Meta, StoryObj } from '@storybook/react'
import { ButtonProps } from './Button.types'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<ButtonProps> = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: {
            type: 'string',
        },
    },
}

export default meta
type Story = StoryObj<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Button',
    },
}
