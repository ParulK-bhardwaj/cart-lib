function calculateTotal(cart) {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function addToCart(cart, product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        cart.push(product);
    }
}

function removeFromCart(cart, product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity -= 1;

        // If the quantity reaches zero, remove the product from the cart
        if (existingProduct.quantity <= 0) {
            cart.splice(cart.indexOf(existingProduct), 1);
        }
    }
}
function removeProductFromCart(cart, product) {
    cart.splice(cart.indexOf(product), 1);
}

function calculateTotalItemCount(cart) {
    return cart.reduce((count, product) => count + product.quantity, 0);
}

function clearCart(cart) {
    cart = [];
    return cart;
}

async function fetchProducts(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const productsData = await response.json();
      return productsData;
    } catch (error) {
      console.error('Error fetching product data:', error);
      return null;
    }
}

