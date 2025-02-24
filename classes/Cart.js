
class Cart{
    constructor(product, total){
        this.product = [];
        this.total = 0;
    }

    addProduct(product){
        this.product.push(product);
        this.total += product.price;
    }

    removeProduct(index){
        if(index >= 0 & index < this.product.length){
            this.total -= this.product[index].price;
            this.product.splice(index, 1);
        }
    }
}

module.exports = Cart