# GraphQL-API
An Express GraphQL API that supports both Mongodb (NoSQL) and PostgreSQL (SQL)

## Installation

If running locally, first set mongodb connection uri as temporary environment variable. Otherwise, skip this step
```bash
export mongodbURI='[Connection String]'
```

Start the server using the following command: 
```bash
node graphql_server/server.js
```

## Usage
Make only POST API Requests to the following URLs

If server hosted Locally: http://localhost:8080/graphql/nosql or http://localhost:8080/graphql/postgresql

If server hosted remotely: https://[hostname]/graphql/nosql e.g https://graphql-api-production-034d.up.railway.app/graphql/nosql


### There are currently 2 endpoints
- /graphql/nosql
- /graphql/postgresql

### Example POST body
```bash
query {
  getUsers {
    uid
    username
    first_name
    last_name
    height
    date_of_birth
  }      
}
```


## Contributing 

As this API started out as a personal upskilling project, I have allowed for pushing directly to main. As more people joins the project, please create new branches and create pull requests to merge with main.


## Tech Stack
- NodeJS
- ExpressJS
- Mongoose (Mongodb NodeJS library)
- GraphQL
- PostgreSQL