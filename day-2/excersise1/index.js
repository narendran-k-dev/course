import Shopping from './shopping.js';
import readline from 'readline';
import Product from './product.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cart = new Shopping();

function getInputFromUser() {
    rl.question('\nDo you want to add, remove a product, or exit? ', (action) => {
        const command = action.trim().toLowerCase();

        switch (command) {
            case 'add':
                rl.question('Enter product name: ', (nameInput) => {
                    const name = nameInput.trim();
                    if (!name) {
                        console.log(' Product name cannot be empty.');
                        return getInputFromUser();
                    }

                    rl.question('Enter quantity: ', (quantityInput) => {
                        const quantity = parseInt(quantityInput.trim());
                        if (isNaN(quantity) || quantity <= 0) {
                            console.log(' Quantity must be a positive number.');
                            return getInputFromUser();
                        }

                        rl.question('Enter product price: ', (priceInput) => {
                            const price = parseFloat(priceInput.trim());
                            if (isNaN(price) || price < 0) {
                                console.log('Price must be a non-negative number.');
                                return getInputFromUser();
                            }

                            const product = new Product({ name, price, quantity });
                            cart.add(product);
                            getInputFromUser();
                        });
                    });
                });
                break;

            case 'remove':
                rl.question('Enter product name to remove: ', (nameInput) => {
                    const name = nameInput.trim();

                    if (!name) {
                        console.log('Product name cannot be empty.');
                        return getInputFromUser();
                    }

                    rl.question('Enter quantity to remove: ', (qtyInput) => {
                        const quantity = parseInt(qtyInput.trim());
                        if (isNaN(quantity) || quantity <= 0) {
                            console.log('Quantity must be a positive number.');
                            return getInputFromUser();
                        }

                        cart.remove(name, quantity);
                        getInputFromUser();
                    });
                });
                break;


            case 'exit':
                console.log(` Final total: ₹${cart.total()}`);
                rl.close();
                break;

            default:
                console.log('Invalid option. Please choose: add, remove, or exit.');
                getInputFromUser();
        }
    });
}

getInputFromUser();
