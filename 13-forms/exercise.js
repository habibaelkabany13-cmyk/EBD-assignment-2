
// 13-forms — your work goes in this file.

export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const p = document.createElement("p");
    p.className = "price";
    p.textContent = `${item.price} EGP`;

    li.appendChild(h3);
    li.appendChild(p);
    list.appendChild(li);
  });
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");
  const error = document.querySelector("#error");

  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = readForm();

    if (!product.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      priceInput.value.trim() === "" ||
      !Number.isFinite(product.price) ||
      product.price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push(product);

    renderList(items);
    clearForm();
  });
}
