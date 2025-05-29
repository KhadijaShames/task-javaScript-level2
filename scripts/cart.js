const cart = {};

function addToCart(name, price) {
  if (!cart[name]) cart[name] = { price, quantity: 0 };
  cart[name].quantity++;
  renderCart();
}

function changeQty(name, delta) {
  cart[name].quantity += delta;
  if (cart[name].quantity <= 0) delete cart[name];
  renderCart();
}

function removeItem(name) {
  delete cart[name];
  renderCart();
}

function clearCart() {
  for (let item in cart) delete cart[item];
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';
  let total = 0;
  for (let name in cart) {
    const item = cart[name];
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      ${name} - $${item.price} × ${item.quantity}
      <button onclick="changeQty('${name}', 1)">+</button>
      <button onclick="changeQty('${name}', -1)">-</button>
      <button onclick="removeItem('${name}')">Remove</button>
    `;
    cartContainer.appendChild(div);
  }
  document.getElementById('total').textContent = total;
}
