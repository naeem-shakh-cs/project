# Problem statement

Design a REST API to model and manage an existing parking lot.

Parking lots consist of several floors. Each floor consists of several slots. Each slot has a slot number.

A parking lot has been created for you in the starter project. You may import the parking lot object and mutate it in memory for making changes.

Create REST APIs for:

- Obtaining a ticket for an available slot, for a certain number of hours. The ticket should contain the floor and the slot number assigned to the vehicle, along with the vehicle registration number, start and expiry time. Once a ticket is issued, the slot is marked unavailable.
- Exiting the parking lot. The result should mention the total number of actual hours at the time of exit.

The solution should prioritize the following:

- Production quality code.
- RESTful API design.
- Domain modelling and code readability.
- Unit testing.

# Get started:

Jest is configured to work out of the box as the testing framework. If you prefer a different one, feel free to install and use that one instead.

```
$ npm install
```

To start the application:

```
$ npm start
```

To start the application in dev mode (auto-restart on change):

```
$ npm run dev
```

Get Availability status of a particular parking slot
```
GET http://localhost:3000/parking-slot/P2-S2
```

Allocate an available parking slot

```
POST http://localhost:3000/parking-allocation/MH11HJ1290
```

To run tests:



$ npm test

