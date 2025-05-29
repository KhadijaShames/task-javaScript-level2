function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expr = document.getElementById('display').value.replace(/×/g, '*').replace(/÷/g, '/');
  try {
    document.getElementById('display').value = eval(expr);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
