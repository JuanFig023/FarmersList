require("./Customer.js");

class Auth {
    constructor(customers = []) {
        this.customers = customers;
    }

    register(name, email, shippingAddress) {
        this.customers.push(new Customer(name, email, shippingAddress));
    }

    login(email) {
        for (customer of this.customers) {
            if (customer.email === email) {
                return customer;
            }
        }
    }
}

module.exports = Auth;
