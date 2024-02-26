DROP DATABASE IF EXISTS projet;
CREATE DATABASE projet;

USE projet;

DROP TABLE if EXISTS PATIENT;
CREATE TABLE PATIENT( 
patient_id INT NOT NULL AUTO_INCREMENT,
firstname VARCHAR(35) NOT NULL,
lastname VARCHAR(35) NOT NULL,
ramq VARCHAR(12) NOT NULL,
status boolean,
PRIMARY KEY(patient_id)
);

DROP TABLE if EXISTS docteur;
CREATE TABLE docteur(
docteur_id INT NOT NULL AUTO_INCREMENT,
firstname VARCHAR(35) NOT NULL,
lastname VARCHAR(35) NOT NULL,
specialité VARCHAR(12) NOT NULL,
licence VARCHAR(12) NOT NULL,
status boolean,
PRIMARY KEY(docteur_id)
);

DROP TABLE if EXISTS administrator;
CREATE TABLE administrator(
admin_id INT NOT NULL auto_increment,
username VARCHAR(20) NOT null,
status boolean,
PRIMARY KEY(admin_id)
);

DROP TABLE if EXISTS credentials;
CREATE TABLE credentials(
user_id INT NOT NULL,
pass VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
PRIMARY KEY(user_id, email),
FOREIGN KEY(user_id) REFERENCES patient(patient_id),
FOREIGN KEY(user_id) REFERENCES docteur( docteur_id),
FOREIGN KEY(user_id) REFERENCES administrator(admin_id)
);



