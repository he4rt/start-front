import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { IconProps } from './Icon.types'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<IconProps> = {
    title: 'Example/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        src: {
            type: 'string',
        },
    },
}

export default meta
type Story = StoryObj<IconProps>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        src: 'arrow',
    },
}
