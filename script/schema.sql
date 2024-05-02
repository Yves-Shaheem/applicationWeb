/**
@author Shaheem Jimmy Yanni
**/



DROP DATABASE IF EXISTS projet;
CREATE DATABASE projet;

USE projet;

DROP TABLE if EXISTS PATIENT;
CREATE TABLE PATIENT( 
user_id INT NOT NULL AUTO_INCREMENT,
firstname VARCHAR(35) NOT NULL,
lastname VARCHAR(35) NOT NULL,
ramq VARCHAR(255) NOT NULL unique,
email VARCHAR(50) not null unique,
password VARCHAR(100) not null,
status boolean,
PRIMARY KEY(user_id)
);

DROP TABLE if EXISTS docteur;
CREATE TABLE docteur(
user_id INT NOT NULL AUTO_INCREMENT,
firstname VARCHAR(35) NOT NULL,
lastname VARCHAR(35) NOT NULL,
specialite VARCHAR(12) NOT NULL,
licence VARCHAR(12) NOT NULL,
email  VARCHAR(50) not null unique,
password VARCHAR(100) not null,
status boolean,
PRIMARY KEY(user_id)

);

DROP TABLE if EXISTS administrator;
CREATE TABLE administrator(
admin_id INT NOT NULL auto_increment,
username VARCHAR(20) NOT null,
password VARCHAR(100) not null,
status boolean,
PRIMARY KEY(admin_id)
);

# DROP TABLE if EXISTS credentials;
# CREATE TABLE credentials(
# user_id INT NOT NULL,
# pass VARCHAR(30) NOT NULL,
# email VARCHAR(30) NOT NULL,
# PRIMARY KEY(user_id, email),
# FOREIGN KEY(user_id) REFERENCES patient(user_id),
# FOREIGN KEY(user_id) REFERENCES docteur( user_id),
# FOREIGN KEY(user_id) REFERENCES administrator(admin_id)
# );

DROP TABLE if EXISTS reservation;
CREATE TABLE reservation(
reservation_id int not null auto_increment,
ramq VARCHAR(50) NOT NULL,
email VARCHAR(50) not null,
telephone VARCHAR(50) not null,
temps VARCHAR(50) not null,
raison varchar(250) not null,
id_doctor int,
status boolean not null,
PRIMARY KEY(reservation_id),
foreign key(email) references patient(email),
foreign key(ramq) references patient(ramq),
foreign key (id_doctor) references docteur(user_id)
);

DROP TABLE if EXISTS resultat;
CREATE TABLE resultat(
resultat_id INT NOT NULL auto_increment,
ramq VARCHAR(13) not null,
patientEmail VARCHAR(50) NOT NULL,
doctorEmail VARCHAR(50) not null,
message VARCHAR(250) NOT null,
status boolean,
PRIMARY KEY(resultat_id),
foreign key(doctorEmail) references docteur(email),
foreign key(patientEmail) references patient(email),
foreign key(ramq) references patient(ramq)
);


