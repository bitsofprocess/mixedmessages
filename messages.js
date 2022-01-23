const meal = {
    appetizer: ['onion rings', 'chips and salsa', 'tater tots', 'fries', 'nachos', 'salad'],
    main: ['steak', 'salmon', 'pasta', 'sandwich', 'burrito', 'pizza'],
    dessert: ['ice cream', 'cake', 'cheesecake', 'cookies', 'brownies'] 
};

let fullMeal = [];

for (const [key, value] of Object.entries(meal)) {
  let i = Math.floor(Math.random() * key.length); 

  switch (key) {

  case 'appetizer':
    fullMeal.push(`Start with: ${value[i]}`);
  break;

  case 'main':
    fullMeal.push(`Your meal will be: ${value[i]}`);
  break;

  case 'dessert':
    fullMeal.push(`Your dessert will be: ${value[i]}`);
  break;
  }
}

console.log(fullMeal)