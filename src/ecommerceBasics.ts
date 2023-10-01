interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

function calculateTotal(cart: Product[]): number {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
}

function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

function addToCart(cart: Product[], product: Product): void {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        cart.push(product);
    }
}

function removeFromCart(cart: Product[], product: Product): void  {
    const existingProduct = cart.find((item) => item.id === product.id);
    // Checking if existingProduct is truthy. If existingProduct is not undefined.
    if (existingProduct) {
        existingProduct.quantity -= 1;

        // If the quantity reaches zero, remove the product from the cart
        if (existingProduct.quantity <= 0) {
            cart.splice(cart.indexOf(existingProduct), 1);
        }
    }
}
function removeProductFromCart(cart: Product[], product: Product): void {
    cart.splice(cart.indexOf(product), 1);
}

function calculateTotalItemCount(cart: Product[]): number {
    return cart.reduce((count, product) => count + product.quantity, 0);
}

function clearCart(cart: Product[]): Product[] {
    cart = [];
    return cart;
}

async function fetchProducts(apiUrl: string): Promise<Product[] | null> {
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

module.exports.calculateTotal = calculateTotal;
module.exports.formatCurrency = formatCurrency;
module.exports.addToCart = addToCart;
module.exports.removeFromCart = removeFromCart;
module.exports.removeProductFromCart = removeProductFromCart;
module.exports.calculateTotalItemCount = calculateTotalItemCount;
module.exports.clearCart = clearCart;
module.exports.fetchProducts = fetchProducts;

