function Product(n,p) {
    this.name = n;
    this.description = p;
    this.getProductName = function () {
        console.log(this.name);
    }

}

function Category(n,c,p) {
    // Product.call(this, n, p);
    this.categoryname = c
    }




const cat = new Category("iphone", "phone", 10000);

console.log(cat)

cat.getProductName();