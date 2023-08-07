// ESTA ES LA OPCION DE ASYNC AWAIT, MAS ABAJO COMENTADO LA OPCION .THIS

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



  // ESTA OPCION ES CON .THIS EN VEZ DE ASYNC Y AWAIT, LA DEL PROFE


//   const mongoose = require('mongoose');

// // Import of the model Recipe from './models/Recipe.model.js'
// const Recipe = require('./models/Recipe.model');
// // Import of the data from './data.json'
// const data = require('./data');

// const MONGODB_URI = 'mongodb+srv://marcel:12345@cluster0.vsfi8s4.mongodb.net/recipe-app';

// // Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then(x => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany()
//   })
//   .catch(error => {
//     console.error('Error connecting to the database', error);
//   })
//   .then(() => {
//     // Run your code here, after you have insured that the connection was made
//     const newRecipe = {
//       title: 'Paella',
//       level: 'Amateur Chef',
//       ingredients: ['Rice', "Rabbit", "Green Beans", " Broth", "Red chili"],
//       cuisine: 'Paella',
//       dishType: 'main_course',
//       img: "https://marxfood.com/wp-content/uploads/mf-RabbitPaella-Feature-1-1200x800.jpg",
//       duration: 30,
//       creator: 'JuanDa'
//     }
//     return Recipe.create(newRecipe)
//   })
//   .then(data => console.log(data.title))
//   .then(() => {
//     return Recipe.insertMany(data)
//   })
//   .then((alltherecipies) => {
//     alltherecipies.forEach((recipe) => {
//       console.log(recipe.title)
//     })
//   })
//   .then(() => {
//     return Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, { new: true })
//   })
//   .then(updatedRecipie => console.log('THIS RECIPE HAS BEEN UPDATED', updatedRecipie))

//   .then(()=> {
//     return Recipe.deleteOne({title: "Carrot Cake"})
//   }) 
//   .then((deleted)=> console.log("Recipe has been deleted!",deleted))
//   .catch(error => {
//     console.error('There is an error during the process: ', error);
//   })
//   .finally(()=>{
//     mongoose.connection.close(()=>{
//       console.log("db is closed!");
//     })
//   })