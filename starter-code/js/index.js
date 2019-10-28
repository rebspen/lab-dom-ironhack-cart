// ITERATION 1

function updateSubtotal($product) {
  const $price = $product.querySelector('.price span').innerText;
  const $quantity = $product.querySelector('.quantity input').valueAsNumber;
  const $subtotal = $product.querySelector('.subtotal');

  return $subtotal.querySelector('span').innerText = $price * $quantity

};


function calculateAll() {
  const $product = document.querySelectorAll('.product');
[...$product].forEach(product => {
  updateSubtotal(product);
});

let total = 0
const $totalPrice = document.querySelector('h2 span');
console.log($product);
[...$product].forEach(product => {
  total +=  parseFloat(product.querySelector('.subtotal span').innerHTML);
});

return $totalPrice.innerHTML =  total
}

const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
