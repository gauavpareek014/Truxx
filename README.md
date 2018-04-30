# Truxx
The project is an full stack implementation including database design for the truxx.com.


## Index

## Setup and Run

* Netbeans IDE and Glassfish server installation
  
  Follow the link https://docs.oracle.com/cd/E21454_01/html/821-2531/gknen.html for the installation.
  
* MySQL database setup and run

  Using the Truxx_Dump.sql file to import database in your MySQL server. 
  

  
## Development Starting Point and Framework

* Frontend (HTML, Materialized CSS, Vanilla JavaScript, jQuery)
  
* Backend (Java, Jersey for REST API)
  
  
## Business Rules and Assumptions

The system support two kinds of user to login, *renter*, and *driver*. 
Every User should create a user account and then and only then will they be able to access the system.
The system users should be of the legal age, that is, above 18.
Once a user deactivates their account they will not be able to reactivate it and all data related to them is lost forever.
A registered driver should have a valid driver’s license and must be medically fit to drive and carry heavy objects.
The trucks that needs to be registered have to be in running and good condition.
The driver’s share would be fixed and would be credited bi-weekly to his account on the basis of the trips(miles) he has covered over the fortnight.
How much the user has to pay for the truck he would want to rent with/without Driver load/unload assistance is determined as per Company policies.
Once booked and charged, no refund shall be processed even if the trip has been cancelled.


### Full Use Case

Users (renters/drivers) can register and login to the system, as well as update and view their details. Drivers should register their trucks while registering themselves to the system. 
Renters shall be able to book a trip, and drivers shall have an option of accepting/declining the trip.
The User's can view their booking history details. Users also should be able to update and delete their profiles.

<p align='center'>
<img src='./images/Basic Use Case Diagram.png' width='600' alt='use case'/>
</p>


### Implemented Parts

We have implemented the database for the full use case, that includes 12 Tables with generalizaiton/specialization relationship. User can register and login to the system. Renter can **book a trip** and **view their booking history**. Driver can also **view their booking history**. Users can **view the Price list**. Users can **update and delete** their profiles.

## Web UI 

The frontend uses HTML5, Vanilla JavaScript and Materialize CSS.

### Login Screen/Home page of Application

<p align='center'>
<img src='.images/Login-Final.png' width='600' alt='login'>
</p>

### Profile View for User

<p align='center'>
  <img src='.images/DriverProfileView-1-Final.png' width='600' alt='profile-view'>
</p>

<p align='center'>
  <img src='.images/DriverProfileView-2-Final.png' width='600' alt='profile-view-1'>
</p>


### Price List View
<p align='center'>
  <img src='.images/PriceList-Final.png' width='600' alt='profile-view-1'>
</p>

### Truck Booking UI
<p align='center'>
  <img src='.images/TruckBooking-Final.png' width='600' alt='profile-view-1'>
</p>




