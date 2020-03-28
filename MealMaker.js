const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
        return this.courses.appetizers;
  },
    get mains() {
        return this.courses.mains;
  },
    get desserts() {
        return this.courses.desserts;
  },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
      
    },
    set mains(mains) {
        this._courses.mains = mains;
      
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
      
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
      } 
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price
      console.log(totalPrice)
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}.  The total price is $${totalPrice}.`
    }
  }
  
    menu.addDishToCourse("appetizers", "wings", 10.99);
    menu.addDishToCourse("appetizers", "mushrooms", 11.99);
    menu.addDishToCourse("appetizers", "calamari", 12.99);
    
    menu.addDishToCourse("mains", "salad", 15.99);
    menu.addDishToCourse("mains", "sandwich", 13.99);
    menu.addDishToCourse("mains", "soup and salad", 17.99);
  
    menu.addDishToCourse("desserts", "tres leches", 5.99);
    menu.addDishToCourse("desserts", "cake", 8.99);
    menu.addDishToCourse("desserts", "milk and cookies", 9.99);
  
  const meal = menu.generateRandomMeal()
  
  console.log(meal)
  
  