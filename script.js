document.getElementById('incrementBtn').onclick = function () {
  const counterParagraph = document.getElementById('counter');
  const currentValue = parseInt(counterParagraph.textContent, 10);
  alert('Un-incremented value: ' + currentValue);
  counterParagraph.textContent = currentValue + 1;
};
