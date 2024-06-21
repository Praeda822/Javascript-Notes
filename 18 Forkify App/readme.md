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
   <br>
   <br>

# 3. The MVC Architecture & Code Hygeine

I should think of MVC, or **Model View Control**, Architecture as a venn-diagram comprised of the following three partitions:

#### 1. Code Structure

I should always be thinking about the structure of my code, which is basically just how I **organise** my code.
<br>

#### 2. Maintainability

I should always be thinking about the maintainability of what I'm building, even **before** i've built it; a project is never _really_ done
<br>

#### 3. Expandability (Scalability)

I should always be thinking about my project's scabaility, in that I want to be able to add/remove features & functionalities of an app _easily_, this is also where modularised design patterns come in
<br>
<br>

Typically speaking, in corporate and/or enterprise-scale (_large-scale_) projects, I'd be using a framework such as **React**, **AngularJS**, **Vue**, **Svelte**, _etc._ to handle the architectural framework & design patterns for me
<br>
<br>

## 3.5 Components of _any_ Architecture

I'm able to break up the components that comprise _all_ software architecture into the following 5 categories:

#### 1. Business Logic

The **business logic** is **_any code that solves the actual business problem directly_**, in that the code itself is _directly_ related to what the business does and what it needs to be successful. For example, **sending messages**, **storing transactions**, **calculating taxes**, **_etc._** would _all_ collectively be categorised as **business logic **
<br>

#### 2. State

The **state** is, essentially, a global variable that stores **all the data** about the application with this global state variable being my one **_true_** source of truth in this _grimdark_ world of programming. **My UI should always be kept in-sync with the application state**. There are, however, _state libraries_ that exist to do all the shitty work for me but since these are concepts I **need** to know, I'm not going to take the easy route.
<br>

#### 3. HTTP Library

The **HTTP Library** is responsible **for making and receiving AJAX requests**, and whilst entirely optional, it is _almost always necessary_ in the creation of real-world apps.
<br>

#### 4. Application Logic (_Router_)

The *Application Logic** is code **that is only about the *implementation of the application* itself\*\*, and this logic is also responsible for the handling of both *navigation* as well as *UI events\*
<br>

#### 5. Presentation Logic(_UI Layer_)

The **Presentation Logic** is code **that is concerned about only the _visible parts_ of the application**, and this logic is essentially responsible for displaying, and maintaining, the _application state_
<br>
