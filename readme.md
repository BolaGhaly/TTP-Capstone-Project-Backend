<a href="https://ttp-capstone-project-backend.herokuapp.com/"> <img src="https://img.shields.io/website-up-down-blue-red/http/monip.org.svg"/> </a>

<h1 align="center"> TTP Capstone Project - Backend (Servers + Databases) </h1>

<h2 align="center">  Technologies Used  </h3>
<div align="center">
  <kbd> <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" /> </kbd>
  <kbd> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /> </kbd>
  <kbd> <a href="https://ttp-capstone-project-backend.herokuapp.com/"> <img src="https://img.shields.io/badge/Deployed%20on%20Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" /> </a> </kbd>
</div>

<h2 align="center"> Custom Routes </h2>
  <div>
      <h3> <ins>:basketball:NBA Players Information Table:</ins> </h3>
      <li>/players_cards: GET request to get all of the players' information.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156496571-ef59e681-c33c-4d5b-aaea-06977b14556f.PNG">
      <br/>
      <br/>
      <li>/players_cards/id: GET request to get one player's information.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156496724-44cc32b5-5b9b-4645-92c6-b078ffa4cde5.PNG">
  </div>
    
  <div>
      <h3> <ins>:closed_lock_with_key:Login and Sign Up Table:</ins> </h3>
      <li>/signup: POST request to insert a new user's username, email, password, and currency/balance</li>
      <br/>
      <img src="">
      <br/>
      <br/>
      <li>/login: POST request to insert the user's email and password. <strong>NOTE:</strong> The user must be registered first by signing up!! Otherwise, it will result in getting an error saying that "Email is not registered". </li>
      <br/>
      <img src="">
      <br/>
      <br/>
      <li>/users: GET request to get all of the users' information.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156502469-e7a210dd-999c-41b2-8235-0ff94ba1e118.PNG">
      <br/>
      <br/>
      <li>/user/id: GET request to get one user's information.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156502606-e778a218-052f-4aa9-b3c6-b6262c7ecb4e.PNG">
      <br/>
      <br/>
      <li>/user/id: PUT request to update the user's currency/balance.</li>
      <br/>
      <img src="">
      <br/>
      <br/>
      <li>/user/id: DELETE request to delete a user.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156502682-f7cfcd89-22b9-476f-894b-8bfaf902ac82.PNG">
      <br/>
      <br/>
  </div>

  <div>
      <h3> <ins>:notebook_with_decorative_cover:User's Collection Joint Table:</ins> </h3>
      <li>/users_collection: POST request to insert the user's id (of the user that's logged in) and the player's id (of the card that they receive from opening a pack/chest) into the "users_collection" table.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156501897-94cff0a7-0435-41c9-aedd-771526ce7fae.PNG">
      <br/>
      <br/>
      <li>/users_collection: GET request to get everything that's in the "users_collection" table</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156503671-a4bc9c64-46c8-45c0-9e99-dd6065bd0e75.png">
      <br/>
      <br/>
      <li>/users_collection/id: GET request to get an array of objects of the user's id and their players' id</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156501296-8ba98300-b8de-4513-9024-3689550906a9.PNG">
      <br/>
      <br/>
      <li>/users_collection/id: DELETE request to delete a user's collection based on the user's id.</li>
      <br/>
      <img src="https://user-images.githubusercontent.com/59656591/156502930-e90b633f-fc51-4167-afde-749e656774a4.PNG">
  </div>
  
  
