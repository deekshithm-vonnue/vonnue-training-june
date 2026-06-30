class Cart {
  constructor(items = [], coupon = 0) {
    this.items = items;
    this.coupon = coupon;
  }

  addItem(item) {
    const items = [...this.items];
    const index = items.findIndex((i) => i.title === item.title);

    if (index !== -1) {
      items[index] = {
        ...items[index],
        quantity: items[index].quantity + 1,
      };
    } else {
      items.push(item);
    }

    return new Cart(items, this.coupon);
  }

  removeItem(index) {
    return new Cart(
      this.items.filter((_, i) => i !== index),
      this.coupon,
    );
  }

  updateQuantity(index, quantity) {
    const items = [...this.items];
    items[index] = { ...items[index], quantity };

    return new Cart(items, this.coupon);
  }

  applyCoupon(discount) {
    return new Cart(this.items, discount);
  }

  getTotal() {
    let total = 0;

    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    total -= (total * this.coupon) / 100;
    return total;
  }
}

class CartStore {
  constructor() {
    const saved = JSON.parse(localStorage.getItem("cart"));

    this.cart = saved ? new Cart(saved.items, saved.coupon) : new Cart();

    this.history = [];
    this.observers = [];
  }

  addObserver(fn) {
    this.observers.push(fn);
  }

  notifyObservers() {
    this.observers.forEach((fn) => fn(this.cart));
  }

  update(cart) {
    this.history.push(this.cart);

    this.cart = cart;

    localStorage.setItem("cart", JSON.stringify(this.cart));

    this.notifyObservers();
  }

  undo() {
    if (this.history.length === 0) return;

    this.cart = this.history.pop();

    localStorage.setItem("cart", JSON.stringify(this.cart));

    this.notifyObservers();
  }
}

const store = new CartStore();

function render(cart) {
  const cartItems = document.querySelector(".car-items");

  cartItems.innerHTML = "";

  cart.items.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart-row">
        <span>${item.title}</span>
        <span>Rs ${item.price}</span>

        <button onclick="changeQuantity(${index},-1)">-</button>

        <span>${item.quantity}</span>

        <button onclick="changeQuantity(${index},1)">+</button>

        <button onclick="removeItem(${index})">
          Remove
        </button>

        <hr>
      </div>
    `;
  });

  document.querySelector(".total-container span").innerText =
    "Rs " + cart.getTotal();
}

store.addObserver(render);

render(store.cart);

document.querySelectorAll(".addtocartbutton").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");

    const item = {
      title: card.querySelector("h2").innerText,
      price: Number(card.querySelector("span").innerText.replace("Rs:", "")),
      quantity: 1,
    };

    store.update(store.cart.addItem(item));
  });
});

function changeQuantity(index, change) {
  const item = store.cart.items[index];

  const quantity = item.quantity + change;

  if (quantity <= 0) {
    store.update(store.cart.removeItem(index));
  } else {
    store.update(store.cart.updateQuantity(index, quantity));
  }
}

function removeItem(index) {
  store.update(store.cart.removeItem(index));
}

function applyCoupon() {
  store.update(store.cart.applyCoupon(10));
}

function undo() {
  store.undo();
}
