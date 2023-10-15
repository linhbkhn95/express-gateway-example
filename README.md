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
   - http://localhost/users  for service user
   - http://localhost/shops  fro service shop

## Authentication
- For `user` service, we already set config about auth.
```
- jwt:
    action:
      secretOrPublicKey: 'the-secret-key'
      checkCredentialExistence: false
- log:
    action:
      message: '${req.method} ${req.originalUrl}'
- request-transformer:
    action:
      headers:
        add:
          requestID: 'requestID'
```
So, to can test, we can use example:
```
curl --location 'http://localhost/users/linhtd' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.e30.79crTy8WpF6gVaCj3G7TsdU7JQzAMZCOuEf5Y8wmC4U'
```

## Rate limit
- For `shop` api. We already had config for rate limit
```
shop:
  apiEndpoints:
    - shop
  policies:
    - rate-limit:
      -
        action:
          max: 10
          windowMs: 120000
          rateLimitBy: "${req.hostname}"
```

So, all of shop's API wil be rate limit that we allow maximum 10 req/2min per client.

 (*): Error when reached up rate limit
  ```
  Too many requests, please try again later.
  ```
