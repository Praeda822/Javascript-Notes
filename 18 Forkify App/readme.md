# 1. User Stories

A **User Story** is a description of an applications functionality, only from the user's perspective
<br>

The common formatting for a user story is, typically speaking, as follows:
<br>

As a **_[type of user]_**, I want **_[an action]_** so that **_[a benefit]_**
<br>

1. As a user, I want **to be able to search for recipes** so that I can find new ideas for meals.<br>

2. As a user, I want **to be able to update the number of servings a meal has**, so that I can cook a meal for an unspecified number of people. <br>

3. As a user I want **to be able to bookmark recipes**, so that I can review them later.
   <br>

4. As a user, I want **to be able to create my own recipes**, so that they're all organised together within the same app

5. As a user, I want **to be able to see both my bookmarks, as well as my own recipes, whenever I leave the app and come back later**, like when I'm safely cooking, for instance
   <br>
   <br>

# 2. Features

1. My recipe search functionality can be implemented as an input field that takes a user's input and sends that input as a request to a WebAPI with (_pre-_)defined keywords, then I can take those results and display them with a pagination as well as the recipe inclusive of the cooking time, servings, and ingredients
   <br>

2. For the changing servings amount functionality, I can implement logic in which I update all my ingredients, stored in an array/object, according to the current number of servings - good _.reduce()_ use case
   <br>

3. For the bookmarking functionality, I can display a list of all my bookmarked recipes
   <br>

4. For the implementation of personalised recipe creation, I should allow users to upload their own recipes(_data_), with those recipes being flagged & bookmarked automatically but I should ensure that Users can only see their _own_ recipes and not other users' (_state management_)
   <br>

5. For saving the current running app state, as well as the implementation of being still able to see my bookmarked and/or own recipes, I can store the data in the browser using _localstorage_ and I can both read & display those saved localstorage bookmarks when the page loads
