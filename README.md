# Assignment 2 - Web API.

Name: Steven McKeown

## Features.
 
 + Private/Protected Routes - Added private routes for all routes in the react application. A user must first authenticate via login or registration to view pages and interact with the app.
 + Integration with React -  Added further integration by using getPopularPeople and getTvShows from the express application, therefore calling data stored on MongoDB. Also created a new implementation of the favourites function to post movies onClick to a user's favourites which is stored on mongoDB. However, I was unable to make these movies display
 + Helmet - Added Helmet to my express application following the recommendation in lecture slides as is improves security.
 + Validation - Added basic validation on express app authentication, ie. you must enter 5 or more characters with at least 1 number and 1 letter.
 + Models - Created more models in the express app (peopleModel, tvShowModel) to create basic schemas for data storage for API data stored in the seedData folder.
 + Express TMDB - Added tmdb endpoints from previous assignment to express app tmdb file to increase the scope of the express app, allowing more testing and further potential for React integration.
 

## Installation Requirements
Apologies in advance, I couldn't get my movies-api folder to work properly on github because there was a nesting problem. Therefore my movies-api express app is available on gitlab.

All dependencies necessary to run the application are included in the package.json. Simply do 'npm install' upon opening the app. If you wish to use your own mongo database, paste your mongoDB url. The same is true for TMDB access, simply paste your api key.

```bat
git clone https://gitlab.com/steven_mck97/webappdev-assignment2-ci.git
```

followed by installation

```bat
git install
npm install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= tmdb key
mongoDB=mongodb+srv://<username>:<your_password>@cluster0.ld9tg.mongodb.net/stevenDB?retryWrites=true&w=majority
SEED_DB=true
SECRET=YourJWTSecret
```


## API Design
Overview of API design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A  
| /api/movies/upcoming | Gets list of upcoming movies| N/A | N/A | N/A
| /api/movies/popular | Get list of popular movies | N/A | N/A | N/A
| /api/movies/now_playing | Get list of now playing movies | N/A | N/A | N/A
| /api/people | Get list of people | N/A | N/A | N/A
| /api/people/:id | Get a person | N/A | N/A | N/A
| /api/tvShows | Get list of tv shows | N/A | N/A | N/A
| /api/tvShows/:id | Get a tv show | N/A | N/A | N/A
| /api/tvShows/airing | Get list of airing tv shows | N/A | N/A | N/A
| /api/tvShows/topRated | Get list of top rated tv shows | N/A | N/A | N/A
| /api/users | Get list of users | User Authentication | N/A | N/A
| /api/users/userNames/favourites| List user's favourites | Add movie to user's favourites | N/A | N/A

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

+ Added basic password validation on login and registration.
+ Helment integration.
+ User schema to restrict access to the API.
+ Added authentication requirements on 3 react app tmdb api routes.
+ Passport authentication in express app to protect server side routes.


## Integrating with React App

The following are the express API integrations I made into the React application. I edited the context file for movies, people, and tv shows to support integration with mongodb and authentication. I also attempted implemented the express AddFavouriteMovies function which is supposed to add user movie favourites to the database. It doesn't quite work though.

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};


export const getPopularPeople = () => {
    return fetch(
       '/api/people',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


  export const getTvShows = () => {
    return fetch(
       '/api/tvShows',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


  export const addFavouriteMovies = (userName, movieId) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: movieId })
    }).then(res => res.json)
}


export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};


export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

~~~

## Extra features
 + Helmet - Added Helmet to my express application following the recommendation in lecture slides as is improves security.

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
