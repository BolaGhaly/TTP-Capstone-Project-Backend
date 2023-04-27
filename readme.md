# TTP Capstone Project - Backend (Server + Database)
<a href="https://ttp-capstone-project-backend.vercel.app/"> <img src="https://img.shields.io/website-up-down-blue-red/http/monip.org.svg"/> </a>

## Technologies Used
<kbd> <img src="https://img.shields.io/badge/javascript-F7E018.svg?style=for-the-badge&logo=javascript&logoColor=black" /> </kbd>
<kbd> <img src="https://img.shields.io/badge/node.js-3E863D?style=for-the-badge&logo=node.js&logoColor=white" /> </kbd>
<kbd> <img src="https://img.shields.io/badge/express.js-EEEEEE.svg?style=for-the-badge&logo=express&logoColor=black" /> </kbd>
<kbd> <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" /> </kbd>
<kbd> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /> </kbd>
<kbd> <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E" /> </kbd>
<kbd> <a href="https://ttp-capstone-project-backend.vercel.app/"> <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" /> </a> </kbd>

## Custom Routes

<details open>
<summary> :basketball: NBA Players Information Table </summary>
<br />

```http
GET /players_cards
```
  - Description: Returns all players.
<img src="https://user-images.githubusercontent.com/59656591/156496571-ef59e681-c33c-4d5b-aaea-06977b14556f.PNG">

<br />
<br />

```http
GET /players_cards/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a specific player based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156496724-44cc32b5-5b9b-4645-92c6-b078ffa4cde5.PNG">

</details>


<details>
<summary> :closed_lock_with_key: Login and Sign Up Table </summary>
<br />

```http
POST /signup
```
  - Body:
    - ```username``` - String
    - ```email``` - String
    - ```password``` - String
    - ```currency``` - Integer
  - Description: Creates and inserts a new user account with the given information in the database.
<img src="https://user-images.githubusercontent.com/59656591/156504947-f46ab39d-dd30-4d8e-897b-a3bcc94c97c7.PNG">

<br/>
<br/>
 
  
```http
POST /login
```
  - Body:
    - ```email``` - String
    - ```password``` - String
  - Description: Allows a user to login with their existing account to gain access to our application by entering their ```email``` and ```password```.
<img src="https://user-images.githubusercontent.com/59656591/156505159-6011eb05-2ce7-48cf-8a83-3df9dd8e12d8.PNG">

<br />
<br />

```http
GET /users
```
  - Description: Returns all users.
<img src="https://user-images.githubusercontent.com/59656591/156502469-e7a210dd-999c-41b2-8235-0ff94ba1e118.PNG">

<br />
<br />

```http
GET /user/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a specific user based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156502606-e778a218-052f-4aa9-b3c6-b6262c7ecb4e.PNG">

<br/>
<br />

```http
PUT /user/{id}
```
  - Parameter: ```id``` - Integer
  - Body:
    - ```currency``` - Integer
  - Description: Updates a user's ```currency``` (balance) based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156505764-01d8f348-ca97-419e-b61b-c4fec1da8686.PNG">

<br/>
<br/>

```http
DELETE /user/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Permanently deletes a user's account from the database based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156502682-f7cfcd89-22b9-476f-894b-8bfaf902ac82.PNG">
  

</details>
 
<details>
<summary> :notebook_with_decorative_cover: User's Collection Joint Table </summary>
<br />

```http
POST /users_collection
```
  - Body:
    - ```user_id``` - Integer
    - ```player_id``` - Integer
  - Description: Adds the player's card that a user receives from opening a pack/chest to their card collection.
<img src="https://user-images.githubusercontent.com/59656591/156501897-94cff0a7-0435-41c9-aedd-771526ce7fae.PNG">

<br/>
<br/>

```http
GET /users_collection
```
  - Description: Returns all records that are in the ```users_collection``` table.
<img src="https://user-images.githubusercontent.com/59656591/156503671-a4bc9c64-46c8-45c0-9e99-dd6065bd0e75.png">

<br/>
<br/>

```http
GET /users_collection/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a user's card collection based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156501296-8ba98300-b8de-4513-9024-3689550906a9.PNG">

<br/>
<br/>

```http
DELETE /users_collection/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Permanently deletes a user's card collection based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/156502930-e90b633f-fc51-4167-afde-749e656774a4.PNG">
  
</details>
