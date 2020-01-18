## Graphql blog

A simple blog api built using graphql, express and mongoDB.  

#### Setup guide

* fork and clone this repo - `git clone https://github.com/<your_username>/graphql-blog.git`
* `cd <path>/graphql-blog`
* Install required dependencies - `npm install`
* Create a DB in mlab.com and add your database username, password and url to a .env file.
    ```.env
    DB_URL = <db_url>
    DB_PASSWORD = <db_password>
    DB_USERNAME = <db_username>
    ```
* Start your development server - `npm start`
* You can now access your graphiql playground at http://localhost:8080/grapqhl
* Happy coding :tada: