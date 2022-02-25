## TTP Capstone Project - Backend (Servers + Databases)

<h3> Backend deployed on Heroku: https://ttp-capstone-project-backend.herokuapp.com/ </h3>
<a href="https://ttp-capstone-project-backend.herokuapp.com/"> <img src="https://img.shields.io/website-up-down-blue-red/http/monip.org.svg"/> </a>

## Technologies Used:
<div>
  <kbd> <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" /> </kbd>
</div>

## Custom Routes:
Players' Cards Database endpoint on Heroku: https://ttp-capstone-project-backend.herokuapp.com/players_cards

<div>
  -- Players' Cards Database routes on Heroku:
  <li>/players_cards: GET request to get all of the players' cards (info)</li>
  <li>/players_cards/id: GET request to get one player's card (info)</li>
</div>
  <br>
  <br>
<div>
  -- Login and Sign Up routes on Heroku:
  <li>/signup: POST request to insert a new user's username, email, password, and currency/balance</li>
  <li>/login: POST request to insert the user's email and password. NOTE: The user must be registered first by signing up!! Otherwise, it will result in getting an error saying that "Email is not registered".</li>
  <li>/users: GET request to get all of the users' information.</li>
  <li>/user/id: GET request to get one user's information.</li>
  <li>/user/id: PUT request to update the user's currency/balance.</li>
  <li>/user/id: DELETE request to delete a user.</li>
</div>
  <br>
  <br>
<div>
  -- User's collection routes on Heroku:
  <li>/users_collection: POST request to insert the user's id (of the user that's logged in) and the player's id (of the card that they received from opening a pack/chest) into the "users_collection" table.</li>
  <li>/users_collection: GET request to get everything that's in the "users_collection" table</li>
  <li>/users_collection/id: GET request to get an array of objects of the user's id (passed as a param) and their players' id (players cards)</li>
  <li>/users_collection/id: DELETE request to delete a user's collection based on the user's id (passed as a param).</li>
</div>
