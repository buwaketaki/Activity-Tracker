# Activity-Tracker
The app keeps record of user activity by taking into consideration the period of activity and the date. It displays the activities in a calendar on respective date and time by highlighting it.

## Usage
The app can be used to keep recod of the activites of different employees in an organisation and display in calender so that it is easy to track them.

## Installation
- Download or clone the repository.
- Run the command ```npm install``` in the main project folder and the client folder. 
- Run the command: ```npm run dev``` in a node environment in the main project folder to start the app.
  
## Tools
- It uses Nodejs (Expressjs) as the backend and Reactjs as the frontend of the application. 
- It uses react-big-calendar to display the calendar and events.

## Project Structure
- *server.js* file in the main project folder contains the backend Mock API.
- The API has following endpoints : 
  1. */api/user* : Fetch data about all the members in database.
  2. */api/user/userId* : Fetch data about particular user.
- The *client* folder contains the frontend of the application.
