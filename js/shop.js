// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
//     products.forEach(item =>{
//         if(item.id === id){
//             cartList.push(item);
//         };
//     });

// }
// buy();


// Exercise 2
function cleanCart() {
    
    //asignando el valor 0 a la prop length del array, automaticamiente vaciamos array
    cartList.length = 0;
}

// Exercise 3
let subTotal = [];
//creamos variable que almacene los precios en array para poder iterar sobre ellos
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //iteramos sobre array cartlist 
for(let i=0; i< cartList.length; i++){
    /*obtenemos la propiedad price de cada uno de los elementos array y hacemos push a    array subtotal*/
       subTotal.push(cartList[i].price);
       
    }
    // iteramos sobre array subtotal y sumamos los elementos
     for(let i of subTotal) total +=i;
     console.log(total);
}
calculateTotal(); 
// Exercise 4
// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

//     //iteramos sobre cada elemento array cartlist   
//     for(let i=0; i < cartList.length; i++){
//         /*comparamos los 2 array: la primera condicion es que el elemento no exista en array cart. En ese caso, agregamos key quantity con valor 1, y key subtotal con valor del precio. Hacemos push para añadir al array cart*/      
//                if(!cart.includes(cartList[i])){
//                    cartList[i].quantity = 1;
//                    cartList[i].subtotal = cartList[i].price;
//                    cart.push(cartList[i]);
//         /*Elemento existe en array cart. iteramos sobre array cart y buscamos el elemento que coincida con el otro comparando alguna propiedad. En este caso, incrementamos el valor de cantidad y sumamos subtotal a subtotal existente*/            
//                }else{
//                    for(let j=0; j < cart.length; j++){
//                        if(cartList[i].name === cart[j].name){
//                            cart[j].quantity ++;
//                            cart[j].subtotal += cart[j].price;
//                        }
//                    }
//                }
//            }
              
//            console.log(cart);
// }
// generateCart();
// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    //iteramos sobre array cart y comparamos si cumple condic aplicar promos    
    for (let i = 0; i < cart.length; i++){
        if(cart[i].id === 1 && cart[i].quantity >= 3){
            let priceDiscount1 = 10;
            cart[i].subtotalWithDiscount = priceDiscount1 * cart[i].quantity;
        }else{
            if(cart[i].id === 3 && cart[i].quantity >= 10){
                let priceDiscount2 = (cart[i].price / 3) * 2;
                cart[i].subtotalWithDiscount = priceDiscount2 * cart[i].quantity;
            }
        }
    }
   // console.log(cart);
}
//applyPromotionsCart();

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.forEach(item =>{
        if(item.id === id){
           if(!cart.includes(item)){
               item.quantity = 1;
               item.subtotal = item.price;
               cart.push(item);
           }else{
               for(let i = 0; i < cart.length; i++){
                   if(item.id === cart[i].id){
                       cart[i].quantity++;
                       cart[i].subtotal += cart[i].price
                   }
               }
           }
        };
    });
    applyPromotionsCart();
    
}
console.log(cart);
addToCart();





// Exercise 8
function removeFromCart(id) {
   for(let i= 0; i<cart.length; i++){
       if(id === cart[i].id){
           if(cart[i].quantity > 1){
               cart[i].quantity -= 1;
           }else if(cart[i].quantity == 1){
               cart.splice(i,1);
           }
       }
   }
}
removeFromCart();
// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    
}
