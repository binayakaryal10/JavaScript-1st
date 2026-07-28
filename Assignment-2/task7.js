console.log("Name: Binayak Raj Aryal");


const prod = [
    {product:"Laptop", price: 100000},
    {product:"Mouse", price: 350},
    {product:"Keyboard", price: 550},
    {product:"Monitor", price: 20000},
    {product:"Speaker", price: 1200}
];

const increasedPrice = prod.map(items => {
    return {
        product: items.product,
        price: items.price * 1.13
    };
});

console.log("Product after 13% price increase:");
console.log(increasedPrice);

const priceGreater = prod.filter(item => item.price > 1000);
console.log(priceGreater);

const findMouse = prod.find(item => item.product === "Mouse");
console.log(findMouse);

console.log("Product Name:");
prod.forEach(item => {
    console.log(item.product);
});