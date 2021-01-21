import React from 'react'
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions
  actions: { argTypesRegex: '^on[A-Z].*' },
  // https://storybook.js.org/docs/react/essentials/viewport
  viewport: {
    viewports: {
      kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
          width: '600px',
          height: '963px'
        }
      },
      kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
          width: '533px',
          height: '801px'
        }
      }
    }
  },
  // https://storybook.js.org/docs/react/essentials/backgrounds
  backgrounds: {
    default: 'default',
    values: [
      { name: 'default', value: '#ffffff' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' }
    ]
  }
}
export const decorators = [
  Story => (
    <div style={{ margin: '2em' }}>
      <Story />
    </div>
  )
]
