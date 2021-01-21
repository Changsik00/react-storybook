import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      }
    },
    primary: { control: 'boolean' }
  },
  // https://storybook.js.org/docs/react/essentials/actions
  parameters: {
    actions: {
      handles: ['mouseover'],
      argTypesRegex: '^on.*'
    }
  }
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  size: 'medium'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
