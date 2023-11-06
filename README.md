
# Final Project, Frontend

Front-end application written in React to use the REST API endpoints developed in part 1 of the project. 

Pre-requisites:
Backend running on localhost. 

Note:
You might need to enable CORS in your Express server. 
This steps are for backend application/server

CORS Installation:
```bash
  npm install cors
```

CORS Usage (app.js)
```bash
  import cors from "cors"

  app.use(cors())
```

## Run the application

Install the needed packages and run the app.

```bash
  npm install
  npm start
```
    
## Folder struture


```bash
app
└── src
    ├── App.js
    ├── components
    │   └── Footer.js
    │   └── MovieCard.js
    │   └── Navigation.js
    └── pages
        ├── Home.js
        ├── Movie.js
        ├── Movies.js
        └── Users.js
```

- App.ts: Front-end React code that manages the different routes of the front end.
- /components: A folder with the reusable components you will use.
- /pages: All application pages have their matching file in this folder.
## Requirements for evaluation

- Create /users page 

- Create /user:id page

- Create /movie:id page

- Inside /user:id page create button to delete user from database

- Save a digital transaction proof of a rating




## Documentation

[Bootstrap](https://react-bootstrap.netlify.app/)

[HTML Basics](https://www.w3schools.com/html/html_basic.asp)

[React](https://react.dev/)
