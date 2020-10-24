# pickin-my-burgers

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-nodemon-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-express--handlebars-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-mysql-blue.svg)](https://shields.io/)

## Description

[Pick Your Burgers](https://pickin-my-burgers.herokuapp.com/) while you check out my work! This project is nothing crazy at first glance but this has beeen one of the most significant project I have worked on in the coding bootcamp so far (more on this later). Just to give you a quick summary - Its a one page app that lets you input the name of a burger you would like in order to save it, interact with it, and delete it. 

## Table of Contents

* [Preview](#preview)

* [Installation](#installation)

* [Usage](#usage)

* [Project Significance](#project-significance)

* [Code Highlights](#code-highlights)

* [License](#license)

* [Contributing](#contributing)

* [Questions](#questions)

## Preview

![video demonstration](public/images/pyb.gif)

## Installation

```
npm install mysql express express-handlebars
```

## Usage 

#### *App User*
Once you open up the deployment link using the app is straight forward. You enter the desired name of your burger in the input field at the bottom of the page. You can click on "*Aye Aye Captain*" to create the burger and have it populate the "BURGERS TO EAT" list. Once the burger is populated you can interact with it by clicking on "*Eat This Burger*" that will move the burger to the "EATEN BURGERS" list (I'm aware its burgers ate but you're here to pick your burgers so its ok :3). Once the burger has been moved you can then delete the burgers by clicking on "*That Was Great*".

#### *Development*
In this project we focused on using the MVC method of coding. Becuase of this we had to be consious about how we created our file structure. I'll giv you a quick run through here: 

* config - here we have our connection to the database and our custom ORM (object relational mapping) functions
* controllers - this contains the js needed to make the calls to the model (backend)
* db - you'll find the needed database schema and seeds 
* models - in this project we only have one model file and it utilized our custom orm files
* public - has all of our front facing files (css, image assets, and browser oriented js)
* views - this holds our files/file structure needed to initiate express-handlebars

## Project Significance

Although the project seemed it was one of the most complicated assignments we have worked on so far. Not becuase of the logic but because of the set up and the way different files interacted with each other. This was also the first project we have made that implements a live database. It feels like this was our first full blown development project!

## Code Highlights

This was the most satisfying chunks of code for me beacuse I spent a long time trying to understand why *this* wasn't working for me. I was able to figure this out from pure curiosity. I just started console logging and commenting out code until I was able to target the button I wanted. I was getting the html. I then used a bit of googleFu to find that I can extract *data-* information by calling it with *dataset*!!!!! That let me target the specific values that I needed in order to make the code execute.

```
$(".eat-brgr").on("click", (event) => {
    event.preventDefault();

    let id = event.target.dataset.id;
    let ateBurger = event.target.dataset.ateburger;
    let didEatBurger = {
      devoured: ateBurger
    };

    if (ateBurger === "true") {
      $.ajax("api/burgers/" + id, {
        type: "PUT",
        data: didEatBurger
      }).then(() => {
        location.reload();
      });
    };
    
  });
```

## License

MIT

## Contributing

[Jonathan-David Lopez Martinez](http://www.jds.world/)

## Questions 

If you have any questions about the repo, want to open an issue or contact me directly please reach out to focus4ursoul@gmail.com. Check out more of my work at [Goodlvn](https://github.com/Goodlvn).

<img src="https://avatars3.githubusercontent.com/u/37821521?v=4=50x50" alt="drawing" width="200"/>
