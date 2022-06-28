# FullStack-Form

# Run the application

### Navigate to the root folder and type  
```
docker-compose -f docker-compose.yml up --build
```
you can access the api on
```
http://localhost:8080/api/personal
```

# The Api will have empty collections
### import API_PostMan file as a collection in [POSTMAN](https://www.postman.com/) Desktop application and then you will see the requests
## Make rquests to the API in the order shown below
```
http://localhost:8080/api/personal/city
http://localhost:8080/api/personal/district
http://localhost:8080/api/personal/address-type
and finally to
http://localhost:8080/api/personal/add
```
The api will be working and you will no longer see empty collections.



Open [http://localhost:3000](http://localhost:3000) to view it in your browser to see the front-end react app.
