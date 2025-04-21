// Elements
const categoryMenu = document.getElementById("category-menu");
const categoryToggle = document.getElementById("category-toggle");
const closeCategories = document.getElementById("close-categories");
const pages = document.querySelectorAll(".page");

let cart = [];

// Toggle Category Menu
function toggleCategories() {
  categoryMenu.classList.toggle("hidden");
}

// Show specific page
function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
}

// Filter products by category
function filterCategory(category) {
  const productSections = document.querySelectorAll(".products");
  
  productSections.forEach((section) => {
    if (category === "all" || section.dataset.category === category) {
      section.style.display = "grid"; // Show the selected category
    } else {
      section.style.display = "none"; // Hide other categories
    }
  });

  toggleCategories(); // Close menu after selection
}

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: ₹${total}`;
}

// Handle form submission
function payNow(event) {
  event.preventDefault();
  alert("Purchase Successful! 🎉");
  cart = [];
  updateCart();
  showPage("home");
  return false;
}

// Start at home page
showPage("home");
