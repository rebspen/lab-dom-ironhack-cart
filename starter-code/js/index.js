// ITERATION 1

function updateSubtotal($product) {
  const $price = $product.querySelector('.price span').innerText;
  const $quantity = $product.querySelector('.quantity input').valueAsNumber;
  const $subtotal = $product.querySelector('.subtotal');

  return $subtotal.querySelector('span').innerText = $price * $quantity

};


function calculateAll() {
  const $productAll = document.querySelectorAll('.product');
  for(let product of $productAll ){
    updateSubtotal(product);
  }

total = 0
const $totalPrice = document.querySelector('h2 span');
for(let product of $productAll ){
  total +=  parseFloat(product.querySelector('.subtotal span').innerHTML)
}

return $totalPrice.innerHTML = total
}

const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4

//TIP - access parent argument then remove

function productRemoveListener(event) {
  const $target = event.currentTarget;
  const $row = $target.parentNode.parentNode;
  const $parent = $row.parentNode;
  $parent.removeChild($row);
}

window.addEventListener('load', () => {
  const $removeButtons = document.querySelectorAll('.btn-remove');
  for (let $removeButton of $removeButtons) {
    $removeButton.addEventListener('click', productRemoveListener);
  }
});

// ITERATION 5

function createProduct(event) {
  const $createRow = event.currentTarget.parentNode.parentNode;

  const $productNameInput = $createRow.querySelector('input');
  const $productPriceInput = $createRow.querySelector('input[type="number"]');

  const nameValue = $productNameInput.value;
  const priceValue = $productPriceInput.valueAsNumber;

  const $tableRow = document.createElement('tr');
  $tableRow.classList.add('product');
  $tableRow.innerHTML += `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const $removeButton = $tableRow.querySelector('.btn-remove');

  $removeButton.addEventListener('click', productRemoveListener);

  const $parent = document.querySelector('#cart tbody');

  $parent.appendChild($tableRow);

  $productNameInput.value = '';
  $productPriceInput.valueAsNumber = 0;
}

window.addEventListener('load', () => {
  const $createButton = document.getElementById('create');
  if ($createButton) {
    $createButton.addEventListener('click', createProduct);
  }
});
