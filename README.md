# express-gateway 

Example uses `express-gateway` for microservice
# Install and run app
## Setup env nodejs 
Step 1: clone project with command `git@github.com:linhbkhn95/express-gateway-example.git`

Step 2: install dependencies with `yarn` command

Step 3: start project
- Start gateway service
  + Ensure port 80 is free, if run stop process use port 80
  + Run service with command `node server`

- Start backend services 
  + Move into backend folder with `cd /serives`
  + Run backend services with `node backend`

# Test
With current config in this project we will have
   - http://localhost/user  for service user
   - http://localhost/healthz  fro service shop

## Authentication
- For `user` service, we already set config about auth. So, to can test, we can use example:
```
curl --location 'http://localhost/user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.e30.79crTy8WpF6gVaCj3G7TsdU7JQzAMZCOuEf5Y8wmC4U'
```
