### Storybook 따라하기

### 설치
```
npx create-react-app storybook-tutorial --template typescript
cd storybook-tutorial
npx sb init 
yarn storybook
```

### Typescript 설정
[https://storybook.js.org/docs/react/configure/typescript](https://storybook.js.org/docs/react/configure/typescript)



### Knobs addon 설치
[https://github.com/storybookjs/storybook/tree/next/addons/knobs](https://github.com/storybookjs/storybook/tree/next/addons/knobs)
```
yarn add @storybook/addon-knobs --dev
```
within .storybook/main.js:
```
module.exports = {
  addons: ['@storybook/addon-knobs'],
};
```
!!! Issue 
Knobs 설치 이후 기본 Controls 부분이 변경 됨 