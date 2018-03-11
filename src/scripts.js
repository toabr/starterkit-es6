const css = require('./styles.less');

console.log('###  works  ###');

document.getElementById('menu-btn').addEventListener('click', () => {
  console.log('click');
  document.body.classList.toggle('menu-open');
});
