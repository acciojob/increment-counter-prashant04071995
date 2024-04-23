//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter');
  const incrementBtn = document.getElementById('incrementBtn');

  let counterValue = 0;

  incrementBtn.addEventListener('click', () => {
    alert(`Counter value before increment: ${counterValue}`);
    counterValue++;
    counterElement.textContent = counterValue;
  });
});
