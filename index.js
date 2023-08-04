const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'nice try';
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(async () => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({
      title: "Delicious Pasta Carbonara",
      level: "Amateur Chef",
      ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g Pecorino cheese", "Salt", "Black pepper"],
      cuisine: "Italian",
      dishType: "Main Course",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 30,
      creator: "ChefJohn",
      created: "",
    })
    .then(()=> console.log(("Recipe created correctly")));
  
  await  Recipe.insertMany(data) 
   await console.log(data)

   const query = { name: 'Rigatoni alla Genovese' };
   await Recipe.findOneAndUpdate(query, {duration:100})

   await  Recipe.deleteOne({ name: 'Carrot Cake'})
   await console.log('Carrot Cake has been deleted')

   await mongoose.connection.close(()=> console.log("Hasta la vista, Baby"))
  

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
