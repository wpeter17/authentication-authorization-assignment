## King Faisal Hospital Management System

Requirements
- Node Js
- MongoDB

```sh
# Instantiate the project
npm install 
# Run project
npm run start
```

Features
-   Create different users as an admin user { admin, doctor, patient } -- the roles
-   Each user has limitations and specific roles only accessible by that user
-   User's sign in with password and email before accessing specific pages
-   Password gets hashed during registration this ensures secure storage of the password
-   Logging in included descrypting the password hash and comparing it with the specified password to authenticate
-   Once logged in an admin user is taken to a dashboard where he can create other users and access their information