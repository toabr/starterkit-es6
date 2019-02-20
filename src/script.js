import "./style.scss";

console.log('###  working  ###');

document.getElementById('menu-btn').addEventListener('click', () => {
  console.log('click');
  document.body.classList.toggle('menu-open');
});
