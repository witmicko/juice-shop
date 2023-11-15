
const button = document.getElementById('submit-button');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myQueryParam = urlParams.get('query');
  output.innerHTML = myQueryParam;
});
