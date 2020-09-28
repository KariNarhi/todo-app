# Todo App (MEAN version)

This is a simple Todo app made with Angular (actually a MEAN-stack).

It also uses Angular Material components and Flex-layout.

The data comes from MongoDB database running with Express server.

(MongoDB installation required or use Docker image).

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server + Express/MongoDB Backend server

Run `npm start` which will concurrently run `ng serve --open` for Angular dev server and `nodemon server.js` for a Express server (needed for MongoDB http calls).

Navigate to `http://localhost:4200/` (the --open flag will do this for you). The app will automatically reload if you change any of the source files.

The backend Express/MongoDB will run at `http://localhost:5000/` and it will be watched by nodemon for any changes.
