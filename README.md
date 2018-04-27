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

Student can register and login to the system to make the appointment for golf cart or auto ride. After the ride, they can give the feedback and rate the driver or the ride. Manager (admin user) can login to make schedule for the auto line or golf cart to drivers on specific date. Driver can login to the system to check the schedule and finish the cart ride trip by filling the billing information. 

Users (renters/drivers) can register and login to the system, as well as update and view their details. Drivers should register their trucks while registering themselves to the system. 
Renters shall be able to book a trip, and drivers shall have an option of accepting/declining the trip.
The system's task is to verify the 

<p align='center'>
<img src='./images/Basic Use Case Diagram.png' width='600' alt='use case'/>
</p>


### Implemented Parts

For the database, it implements the whole part of the full use case including 12 tables with generalizaiton/specialization relationship. In this web application, due to the time limitation, I only implemented some key functionalities of the student user part, which includes **looking up auto/cart schedule timetable, registration, log in, log out, make/look up/cancel appointments, look up/update profile**. 

