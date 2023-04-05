import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
    title: 'Example/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        content: {
            type: 'string',
        },
    },
}

export default meta
type Story = StoryObj<typeof Text>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        content: 'Button',
    },
}
