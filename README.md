# Restaurant Booking Application (Server-side)

## Project Description:

This project is from the Advanced Web Development unit at UNE. The complete full-stack process was taught and here the backend was built using node.js and
mongodb. The client-side in this example was a React front-end, but I later decided to integrate this backend with a Vue.js front-end found in this
[repository](https://github.com/jleg13/MEVN_Application). Part of this project was to become familiar with testing and documenting our code. Here I have
used Swagger to create the API-docs and used jest to test the code.

## Built With:
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


## How to run the app:
- Install [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) on your machine.
- In the terminal, run the command `docker-compose up -d` or `docker compose up -d` in the `dropbeartable` directory.
- Server-side: visit [http://localhost:3000](http://localhost:3000).
- MongoDB: visit [http://localhost:8081](http://localhost:8081).
- Client-side: visit [http://localhost:8080](http://localhost:8080).


## How to shut down the app:

Important: the command will remove all unused volumes, including the named volume `dropbeartable_mongodb`, which contains all of your data. You should
follow the steps to back up your data beforehand.

- To back up the data:
	- visit [http://localhost:8081](http://localhost:8081)
	- select your database and export the data
	- Important: submit your assignments 2 and 3 with the exported data!
- Run the command `docker-compose down -v` to stop the running containers and remove the volumes.

## Mongo Data:
To test the server endpoints import the mongoDb data files exported from development stored in:

- /server/mongo-data

Visit [http://localhost:8081](http://localhost:8081) and import each file as a collection in the 'test' database.

## Testing the API:
Use the following curl commands to test the API endpoints:
## User Signup
```
curl --request POST \
  --url http://localhost:3000/api/user/signup \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "test@example.com",
  "password": "password123"
}
'
```
## User Login:
```
curl --request POST \
  --url http://localhost:3000/api/user/login \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "test@example.com",
  "password": "password123"
}
'
```
## New Reservation
```
curl --request POST \
  --url http://localhost:3000/api/user/test@3154/reservations \
  --header 'Content-Type: application/json' \
  --data '{
      "restaurant": "Bella Bella",
      "date": "2021-08-18",
      "time": "18:00",
      "guests": 6,
      "mobile": "0408378465",
      "requests": "peanut allergy",
      "status": "Processing"
    }'
```
## Get User Reservations
```
curl --request GET \
  --url http://localhost:3000/api/user/test@3154/reservations \
  --header 'Content-Type: application/json'
```
## Update User Reservation
```
curl --request PUT \
  --url http://localhost:3000/api/user/test@3154/reservations/611b309513b11719a30e41c6 \
  --header 'Content-Type: application/json' \
  --data '{
      "date": "2021-08-19",
	"status": "Processing"
} '
```
## Delete User Reservation
```
curl --request DELETE \
  --url http://localhost:3000/api/user/josh6349/reservations/611b309513b11719a30e41c6
```
## Add a Guest Reservation
```
curl --request POST \
  --url http://localhost:3000/api/user/guest-reservation \
  --header 'Content-Type: application/json' \
  --data '{
	 "restaurant": "Spice Is Right",
	 "date": "2021-08-17",
		"time": "18:00",
		"guests": 6,
		"mobile": "0408378465",
		"requests": "peanut allergy",
		"status": "Processing"
}
'
```
## Guest Login
```
curl --request POST \
  --url http://localhost:3000/api/user/login/guest \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "guest5977",
  "password": "a17e25e8dff0"
}'
```
## Add Restaurant
```
curl --request POST \
  --url http://localhost:3000/api/restaurant \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Bella",
    "cuisine": "italian",
    "openTime": "17:00",
    "closeTime": "23:00",
    "seatingInterval": 30,
    "tableCapacityPerInterval": 4,
    "info": "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et
    interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa.",
    "image": "https://dropbeartable.s3.ap-southeast-2.amazonaws.com/italian.jpg"
  }'
```
## Get Resaurant Schedule
```
curl --request GET \
  --url http://localhost:3000/api/restaurant/6119de6e65cbdf03670fca42/schedule
```


## How to Open the Swagger API Docs
## Using the Swagger generated server

### Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project. 

### Running the server
To run the server using npm, run:

```
npm --prefix ./server/API-Docs run start
```

To view the API Docs:

```
http://localhost:9000/docs
```


## Authors

**Joshua Le Gresley** - *Initial work* - [jleg13](https://https://github.com/jleg13).

## Support:
Please email joshualegresley@gmail.com if further details are required.

## Contributing:
For major changes, please open an issue first to discuss what you would like to change.
