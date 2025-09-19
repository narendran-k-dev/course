class Shopping {
    constructor() {
        this.products = new Map();
    }

    add(product) {
    if (!product.name || !product.price || product.quantity === undefined) {
        console.log("Product must have a name, price, and quantity");
        return;
    } else if (typeof product.price !== "number" || typeof product.quantity !== "number") {
        console.log("Product price and quantity must be numbers");
        return;
    } else if (product.price < 0 || product.quantity <= 0) {
        console.log("Product price can't be negative and quantity must be at least 1");
        return;
    }

    this.products.set(product.name, product);
    console.log(`Product has been added -> ${product.name}`);
    console.log(`Total price after adding ${product.name} -> ₹${this.total()}`);
}


    remove(name, quantityToRemove) {
    if (!this.products.has(name)) {
        console.log("No product found with that name.");
        return;
    }

    const product = this.products.get(name);

    if (quantityToRemove >= product.quantity) {
        this.products.delete(name);
        console.log(`Removed all of '${name}' from the cart.`);
    } else {
        product.quantity -= quantityToRemove;
        console.log(`Removed ${quantityToRemove} of '${name}'. Remaining: ${product.quantity}`);
    }

    console.log(` Total after removal: ₹${this.total()}`);
}


    total() {
        let total = 0;
        for (const product of this.products.values()) {
            total += product.price * product.quantity;
        }
        return total;
    }
}

export default Shopping;
