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
<summary> :basketball: Players Table </summary>
<br />

```http
GET /players_cards
```
  - Description: Returns all players.
<img src="https://user-images.githubusercontent.com/59656591/234909911-2c123bd3-c05d-4596-b164-b129cef96a8e.png">

<br />
<br />

```http
GET /players_cards/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a specific player based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234910738-a5db2df0-a6d5-4a59-808a-f3025cc65c38.png">

</details>


<details>
<summary> :closed_lock_with_key: Users Table </summary>
<br />

```http
POST /signup
```
  - Body:
    - ```username``` - String
    - ```email``` - String
    - ```password``` - String
    - ```accountBalance``` - Integer
  - Description: Creates and inserts a new user account with the given information into the database.
<img src="https://user-images.githubusercontent.com/59656591/234912707-a6287c66-e3c5-442b-8b9d-cad0b70bf489.png">

<br/>
<br/>
 
  
```http
POST /login
```
  - Body:
    - ```email``` - String
    - ```password``` - String
  - Description: Allows a user to login with their existing account to gain access to our application by entering their ```email``` and ```password```.
<img src="https://user-images.githubusercontent.com/59656591/234914447-bf99f27d-7d67-4ccf-ba7d-8b51befc0582.png">

<br />
<br />

```http
GET /users
```
  - Description: Returns all users.
<img src="https://user-images.githubusercontent.com/59656591/234915628-2ef15de5-6187-47c8-b025-1204d0f15e9f.png">

<br />
<br />

```http
GET /user/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a specific user based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234917574-6e205306-1375-4905-9f3d-5e0447968a5f.png">

<br/>
<br />

```http
PUT /user/{id}
```
  - Parameter: ```id``` - Integer
  - Body:
    - ```accountBalance``` - Integer
  - Description: Updates a user's account balance based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234919495-a551299e-e6b8-410c-af3c-b6e60edfbe9b.png">

<br/>
<br/>

```http
DELETE /user/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Permanently deletes a user's account from the database based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234923510-7b16f92b-15f7-4569-b75a-a2a9610cb6d6.png">

</details>
 
<details>
<summary> :notebook_with_decorative_cover: Users Collections Table </summary>
<br />

```http
POST /users_collection
```
  - Body:
    - ```userId``` - Integer
    - ```playerId``` - Integer
  - Description: Adds the player's card that a user receives from opening a pack/chest to their card collection.
<img src="https://user-images.githubusercontent.com/59656591/234929243-dc1d30a9-9dc0-4740-a2a5-1db0af545596.png">

<br/>
<br/>

```http
GET /users_collection
```
  - Description: Returns all records that are in the ```users_collections``` table.
<img src="https://user-images.githubusercontent.com/59656591/234929787-83de3a25-49fe-4469-ac9f-2361c2011b2f.png">

<br/>
<br/>

```http
GET /users_collection/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Returns a user's card collection based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234931348-3088b80c-3e79-4d0a-8a64-5e1b24aa4c46.png">

<br/>
<br/>

```http
DELETE /users_collection/{id}
```
  - Parameter: ```id``` - Integer
  - Description: Permanently deletes a user's card collection based on the given ```id```.
<img src="https://user-images.githubusercontent.com/59656591/234932011-214df6f9-932a-4671-9c39-b7c52a1ccbff.png">

</details>
