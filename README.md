# WIP (Works In Progress) - A Flask React Instructables Clone

https://wip-site.herokuapp.com/

Welcome to WIP, an Instructables clone, where creatives come to share the development of all their works in progress! This project was built with Javascript, React, and Redux in the frontend, and Python with Flask for the backend.

##To Install

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/CamTangalakis/WIPSite.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory OR cd into the react-app folder and run npm install to install node package manager dependencies.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Run Locally

To start the server, run flask run from the root directory, then run npm start from the react-app directory. This will allow you to make requests to http://localhost:3000 using any client (browser and Postman). To stop the server from listening to requests, press CTRL + c for Windows/Linux or CMD + c for MacOS in the terminal that you started the server (wherever you >ran npm start).

## Run Live

This project is live at https://wip-site.herokuapp.com/

## MVP Features 



## WIP Features
https://github.com/CamTangalakis/WIPSite/wiki/MVP-Feature-List

Create a new user, or sign in as an existing user or the Demo user. 


Add projects to share with your community. Edit and delete your posts optionally. 

Add comments on yours or other users' projects. Edit and delete your comments optionally. 

Explore the community and like your favorite ideas!
![Home Page](https://github.com/CamTangalakis/WIPSite/blob/main/WikiImages/Home.png)

Read, create, edit, and delete projects (full CRUD)
Read, create, edit, and delete comments on projects (full CRUD)
Like your favorite projects in your community (create/read/delete)
Sign up and Login functions were provided with the starter. 

Future Components: Posts! Keep your project up-to-date with all the progress you make!

## Frontend Routes
https://github.com/CamTangalakis/WIPSite/wiki/Frontend-Routes

## React Components 

auth, NavBar, User, and UserList were provided with the starter. 

** Icons made by FontAwesome **
