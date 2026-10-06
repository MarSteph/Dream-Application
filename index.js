/* Pseudocode

START
    CREATE drinks options array
    CREATE order array
    CREATE cart array
    DISPLAY "Enter the name for the order: "
    GET response
    STORE response in order array
    CREATE drinks menu array
    DISPLAY drink menu from drinks menu array
    DISPLAY "What is your drink selection? "
    GET response
    DISPLAY "How many would you like? "
    GET response
    STORE responses in order array
    CREATE array within order array to store drink option choices
    DISPLAY "12oz or 16oz? "
    GET response
    STORE response in drink option choices
    DISPLAY "Hot or Iced? "
    GET response
    STORE response in drink option choices
    DISPLAY "Whole or Oat or Almond? "
    GET response
    STORE response in drink option choices
    DISPLAY "Dark or Light or Decaf? "
    GET response
    STORE response in drink option choices
    STORE order in cart array
    DISPLAY "Your Order Summary: "
    DISPLAY "Name: " and name from order
    DISPLAY "Drink: " and drink from order
    DISPLAY "Quantity: " and quantity from order
    DISPLAY "Size: " and first option from drink option choices
    DISPLAY "Hot or Iced: " and second option from drink option choices
    DISPLAY "Milk: " and third option from drink option choices
    DISPLAY "Roast: "  and final option from drink option choices
END
*/

let readline = require("readline-sync");

let options = [[12, 16], ["Hot", "Iced"], ["Whole", "Oat", "Almond"], ["Dark", "Light", "Decaf"]];

let order = new Array(); // Building Arrays Example

let cart = new Array();

let name = readline.question("Enter the name for the order: ");

order.push(`Name: ${name}`);

let drinks_menu = [ // Multidimensional array from "Building Arrays"
    ["London Fog", "Matcha Latte", "Miel", "Mocha"],
    [[5.25, 5.75], [6.25, 6.75], [5.50, 6.00], [5.50, 6.00]]
];

console.log("\nDrink Menu (12oz or 16oz):");
for (let i = 0; i < drinks_menu[0].length; i++) {
    console.log(drinks_menu[0][i] + " $" + drinks_menu[1][i][0] + " $" + drinks_menu[1][i][1]);
}

let drink_selection = readline.question("\nWhat is your drink selection? ");

let quantity = readline.questionInt("\nHow many would you like? ");

order.push(`Drink: ${drink_selection}`);

order.push(`Quantity: ${quantity}`);

order.push(new Array());

options.forEach((option) => { // forEach iterator array method from "Using Arrays"
    for (let i = 0; i < option.length; i++) { // Using for loops from "Working With Loops"
        if (option.length === 2 && option[i+1]) { // Conditional statements from "Control Structures and Logic"
            if (Number(option[i])) { // Explicit type conversion from "Values, Data Types, and Operations"
                let choice = readline.questionInt(option[i] + "oz" + " or " + option[i+1] + "oz? "); // String concatenation from "Stringing Characters Together"
                order[order.length-1].push(`Size: ${choice}oz`);
            }
            else {
                let choice = readline.question(option[i] + " or " + option[i+1] + "? ");
                order[order.length-1].push(`Hot or Iced: ${choice}`);
            }
        }
        else if (option.length === 3 && option[i+2]) {
            let choice = readline.question(option[i] + " or " + option[i+1] + " or " + option[i+2] + "? ");
            if (option[i].toLowerCase() === 'whole') {
                order[order.length-1].push(`Milk: ${choice}`)
            }
            else if (option[i].toLowerCase() === 'dark') {
                order[order.length-1].push(`Roast: ${choice}`)
            }
        }
    }
})

cart.push(order);

console.log("\nYour Order Summary:");

for (order of cart) {
    order.forEach((item) => {
        if (typeof item === 'object') {
            item.forEach(item => console.log(item));
        }
        else {
            console.log(item);
        }
    });
}


