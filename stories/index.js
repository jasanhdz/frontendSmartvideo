import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">Hello Storybook</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  })
  .add('with text and emojin', () => {
    const button = document.createElement('button');
    button.innerHTML = 'Hola Storybook 😎';
    return button;
  })