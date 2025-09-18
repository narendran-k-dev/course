class Product {
    constructor(props) {
        Object.defineProperty(this, 'name', {
            value: props.name,
            writable: false,
            enumerable: true,
            configurable: false
        })
        Object.defineProperty(this, 'price', {
            value: props.price,
            writable: true,
            enumerable: true,
            configurable: false
        })
    }


}
export default Product