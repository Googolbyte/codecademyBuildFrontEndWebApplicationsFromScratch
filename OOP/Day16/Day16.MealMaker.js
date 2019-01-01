const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
//Course Getter//
  get courses() { //Some high level function I do not understand
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
//Every Other Getter & Setter//
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set deleteAppetizer (appetizer) {
    let a = this._courses.appetizers.indexOf(appetizer);
    this._courses.appetizers.splice(a, a);
  },
  set deleteMains (main) {
    let m = this._courses.appetizers.indexOf(main);
    this._courses.appetizers.splice(m, m);
  },
  set deleteDessert (dessert) {
    let d = this._courses.appetizers.indexOf(dessert);
    this._courses.appetizers.splice(d, d);
  },

//Methods//
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    return dishes[Math.floor((Math.random() * dishes.length))];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    return `
${appetizer.name}, Price: ${appetizer.price}
${main.name}, Price: ${main.price}
${dessert.name}, Price: ${dessert.price}

Total Price: $${dessert.price + main.price + appetizer.price}`;
  }
}
/*{ _courses: { appetizers: [], mains: [], desserts: [] },
  courses: [Getter],
  appetizers: [Getter],
  mains: [Getter],
  desserts: [Getter],
  deleteAppetizer: [Setter],
  deleteMains: [Setter],
  deleteDessert: [Setter],
  addDishToCourse: [Function: addDishToCourse],
  getRandomDishFromCourse: [Function: getRandomDishFromCourse],
  generateRandomMeal: [Function: generateRandomMeal] }*/

menu.addDishToCourse('appetizers', 'Buttered Toast', 1);
menu.addDishToCourse('appetizers', 'Tiny Pancakes', 1);
menu.addDishToCourse('appetizers', 'Fruit', 1);
menu.addDishToCourse('mains', 'Dutch Baby Pankcake', 5);
menu.addDishToCourse('mains', 'Fried Chicken & Waffles', 6);
menu.addDishToCourse('mains', 'English Breakfast', 4);
menu.addDishToCourse('desserts', 'Fried Icecream Scoop', 3);
menu.addDishToCourse('desserts', 'Japanese Crepe', 3);
menu.addDishToCourse('desserts', 'Donut Holes', 3);

console.log(menu.generateRandomMeal());

//Great idea for another time... v
/*
let dishCount = 0;

while (dishCount < 10) {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      menu.addDishToCourse();
  }
}
*/
