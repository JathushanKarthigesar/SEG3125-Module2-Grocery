	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		price: 9.99
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		price: 4.99
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree:true,
		price: 1.99
	},
	{
		name: "sandvich",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		nutFree:false,
		price: 2.49
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		price: 11.99
	},
	{
		name: "veggie burger",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree:false,
		price: 2.99
	},
	{
		name: "bacon",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		nutFree:true,
		price: 8.99
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree:true,
		price: 1.49
	},
];
	
products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose Intolerance") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut Allergy") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
