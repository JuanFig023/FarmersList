
class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(Product){
        this.products.push(Product);
        this.total += Product.price;
    }

    removeProduct(index){
        if(index >= 0 && index < this.products.length){
            this.total -= this.products[index].price;
            this.products.splice(index, 1);
        }
    }
}

module.exports = Cart;