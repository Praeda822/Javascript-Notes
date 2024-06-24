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

### 1. Code Structure

I should always be thinking about the structure of my code, which is basically just how I **organise** my code.
<br>

### 2. Maintainability

I should always be thinking about the maintainability of what I'm building, even **before** i've built it; a project is never _really_ done
<br>

### 3. Expandability (Scalability)

I should always be thinking about my project's scabaility, in that I want to be able to add/remove features & functionalities of an app _easily_, this is also where modularised design patterns come in
<br>
<br>

Typically speaking, in corporate and/or enterprise-scale (_large-scale_) projects, I'd be using a framework such as **React**, **AngularJS**, **Vue**, **Svelte**, _etc._ to handle the architectural framework & design patterns for me
<br>
<br>

## 3.3 Components of _any_ Architecture

I'm able to break up the components that comprise _all_ software architecture into the following 5 categories:

### 1. Business Logic

The **business logic** is **_any code that solves the actual business problem directly_**, in that the code itself is _directly_ related to what the business does and what it needs to be successful. For example, **sending messages**, **storing transactions**, **calculating taxes**, **_etc._** would _all_ collectively be categorised as **business logic**.
<br>

### 2. State

The **State** is, essentially, a global variable that stores **all the data** about the application, with this global state variable being my one **_true_** source of truth in this _grimdark_ world of programming. **My UI should always be kept in-sync with the application state**. There are, however, _state libraries_ that exist to do all the shitty work for me, such as **Redux** & **MopX**, but since these are concepts I **need** to know, I'm not going to take the easy route.
<br>

### 3. HTTP Library

The **HTTP Library** is responsible **for making and receiving AJAX requests**, and whilst entirely optional, it is _almost always necessary_ in the creation of real-world apps.
<br>

### 4. Application Logic (_Router_)

The **Application Logic** is code **that is only concerned about the _implementation of the application_ itself**, and this logic is also responsible for the handling of both _navigation_ as well as _UI events_.
<br>

### 5. Presentation Logic(_UI Layer_)

The **Presentation Logic** is code **that is concerned about only the _visible parts_ of the application**, and this logic is essentially responsible for displaying, and maintaining, the _application state_.
<br>
<br>
<br>

## 3.6 The Model-View-Controller (MVC) Architecture

The main purpose of the _MVC Architecture_ is to specifically seperate the **Business Logic** from the **Application Logic**, however I need a _bridge_ to _re-unite_ the two logic-blocks together as a direct consequence of this divorce, with that bridge explicitly being the **Controller**
Good software design incorporates all of the aforementioned concepts into its design structure, but it also follows the same logic as I used to on the tools, in that **any good architect designs a house to be built in a manner where all the trades are able to perform their jobs without touching dicks with one another**. What I mean by this, is that all of the structured design components that go into the house are **_kept seperated_**.
<br>
But, as a _universal rule_ all good software design contains three main parts:

#### 1. Model

The **Model** contains both the **State** as well as the **Business Logic responsible for manipulating the State**. The **Model** also contains the **HTTP Library** that is responsible for **both getting & receiving data retrieved from the web**, such as from an _API_ or backend. The **Model** is typically being asked for data by the **Controller**, and this task may involve, for instance, making an _AJAX Request_ to the web.

#### 2. Controller

The **Controller** is responsible for handling UI events and **dispatching tasks to both the Model and View**, and thus controls, or _orchestrates_, the entire application's operation unto itself. The **Controller** contains the **Application Logic**, and it kind of _sits_ between the **Model** and the **View**, acting as a _bridge_ between the **Model** and the **View** since the two typically don't know about one another (_or should always exist independently of each other_). For example, a user clicking on something will be handled by the **Controller** so it may involve updating the User Interface, and also asking the **Model** for some data, then once the data arrives, the **Controller** takes the data and _sends it_ to the **View**. Both the **Model** and **View** sit around doing _sweet FA_ until the **Controller** gives them instructions and establishes a known link between the three models.

#### 3. View

The **View** is for the **Presentation Logic**, so it is the part of the application that the user will directly interact with. This model focuses entirely on the application's **_data_**, and so the **View** will typically contain both the **State** as well as the **Business Logic that manipulates the State**. The **View** also receives the data from the **Controller** that was _originally asked for and sent by the **Model**_, and requested for by the **Controller**, with this received data ultimately becoming responsible for changing the application's **State** and finishing the whole _data-flow_ cycle.
<br>
<br>
<br>

## 3.9 Event Handling in MVC: Publisher-Subscriber Pattern

Events should be **handled** by the **controller**, otherwise I would end up with application logic in the view. <br>
Additionally, events should be **listened for** in the **View**, otherwise I would need DOM elements in the controller
<br>

In the **Publisher-Subscriber Pattern**, I have a **Publisher**, which is essentially my code that knows _when_ to react, and in this project's case that code is the _addHandlerRender()_ function, **as it will contain the _addEventListener()_ method and will therefore know when to react to the event**, and that _addHandlerRender()_ function is part of the **Class RecipeView**.
<br>

On the other hand, in the **Publisher-Subscriber Pattern** I also have a **Subscriber**, which is essentially **the code that will be executed when the event happens**, and in this project's case that code is the _controlRecipes()_ function that is in my **Controller**
<br>

OK... So, what's the solution to the problem of my _MVC_ architectural components being not only unable to see one another, but also requiring the ability to see one another for my app's functionality in the first place??
<br>

Well, I can **subscribe to the publisher (_link my MVC Architecture together_) by passing in my _subscriber_ function as an _argument_ to the _init()_ function (_part of the controller module_) which is called as soon as the program loads, which in turn immediately calls the _addHandlerRender()_ function from the view**. This is all possible since the controller _does_ import both the **view** as well as the **model**.
<br>

Now, as I call my _addHandlerRender()_ function, I pass the _controlRecipes()_ function into it as an argument, so I'm essentially **subscribing _controlRecipes()_ to _addHandlerRender()_**
<br>

Finally, connecting these two functions together on initial app load, _addHandlerRender()_ **listens for events using the _addEventListener()_ method (_as always_) and as soon as the event actually happens the _controlRecipes()_ function will be called as the callback function of _addEventListener()_**
<br>
