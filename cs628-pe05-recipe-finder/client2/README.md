# Recipe Finder

This project is to create an app for users to add, edit, and delete recipes. 
#### Application's features:
1. **Recipe List:** Implement a route that displays a list of recipes. Each recipe in the list should be a clickable link that navigates to the individual recipe's details page.
2. **Add Recipe:** Implement a route that allows users to add a new recipe along with its information. The user should be able to provide the recipe's name, ingredients, cooking instructions, and other details.
3. **Recipe Details:** Implement a nested route under the "Recipe List" route that displays detailed information about a specific recipe. When a user clicks on a recipe name from the recipes list, they should be redirected to the recipe's details page, where all the information provided about the recipe is displayed. Utilize the useParams hook to fetch and display information based on the recipe's unique identifier. This recipe information should be displayed within the same page layout as the "Recipe List" page, maintaining a consistent overall design.
4. **Update and Delete:** Implement functionality to update and delete recipes. Users should have the option to edit recipe details and delete recipes from the system.

#### Requirements:
* Use React Router for implementing the different routes in your application.
* Set up a back end using Node.js, Express, and MongoDB Atlas to store and manage recipe data.
* Utilize the MongoDB Node.js driver to interact with the database for adding, updating, and deleting recipes.
* Apply your own styling to make the application visually appealing and user-friendly.
* Organize your components and files in a structured manner for clarity.

#### Features:
* Click on the _Add Recipe_ button on the navbar will take the user to a model to add the recipe with text fields of _recipe name_, _ingredients_, and _instructions_. Once that's done the user can click _add recipe_ button to store the data.

* _Home_ will direct the users to the homepage where they can browse for more recipes. 

* Users can _add_, _delete_, _edit_, and _read_ the recipe of their choice.

* The logo is custom made and route to homepage when click on it.  

#### Future improvement:
* This project could improve on allowing the users to upload an image of the dish.
* Allowing users to create an account with login and signout features.
* Organize recipes' list in an ascending order. 

## input-process-output model:
1. A requirement from the environment (input)
2. A computation based on the requirement (process)
3. A provision for the environment (output)

### 1. Input
For this project instead of using Codespace, it is run locally on a laptop with a virtual environment to isolate the project dependencies, ensuring that each project can use its own specific versions of packages without conflicts arising from other projects on the system.

Runs the app in the development mode after creating a React app and Server API

**Frontend**

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Backend**

Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

### 2. Process
**FRONTEND**
1. Inside the root folder (_cs628-pe05-recipe-finder_), run: 
```
python3 -m venv venv
```
2. Activate the environment:
```
source venv/bin/activate
```
3. Once that's done, create an React app for the frontend: 
```
npx create-react-app client
```
4. Now cd to the _client_ directory to install packages (_router_ & _axios_)
```
npm install react-router-dom axios
```
5. Once that's done, start up the application at root folder (_client_):
```
npm start 
```

**BACKEND**
1. Repeat **frontend** step #2 to activate the environment for the **backend**. 
   
2. Create a backend directory call _server_, run:
```
mkdir server 
```
3. Then cd to the _server_ directory, run:
```
npm init -y 
```
4. Then install _express_, _mongoose_, _cors_ and _dotenv_, run: 
```
npm install express mongoose cors dotenv
```
5. To start up the backend, at the root directory '_server_', run:
```
node server.js
```

**DEACTIVATE ENVIRONMENT**
1. To deactivate the environment, run:
```
deactivate 
```

### How to create or use:
[MERN](https://www.mongodb.com/resources/languages/mern-stack-tutorial)

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[Outlet](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e#:~:text=What%20is%20the%20Outlet%20in,route%20components%20will%20be%20rendered.)

[Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Filter() Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Additional info:**

[MEAN](https://www.tpointtech.com/cors-in-mean-stack#:~:text=The%20CORS%20stands%20for%20Cross,4200%20for%20our%20angular%20app.)

[Outlet](https://www.google.com/search?q=what+is+outlet+in+react+router+dom&oq=what+is+Outlet&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDY5MTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)
### 3. Output
**Home**
<img src="../public/home.png" alt="recipe homepage" width="800" height="250">

**Recipe List**
<img src="../public/recipe-list.png" alt="recipe-list" width="550" height="200">

**Add Recipe**
<img src="../public/add-recipe.png" alt="add-recipe" width="550" height="300">

**Edit or Delete Recipe**
<img src="../public/recipe.png" alt="edit-recipe" width="550" height="300">