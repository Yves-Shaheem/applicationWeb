-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           11.3.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour projet
DROP DATABASE IF EXISTS `projet`;
CREATE DATABASE IF NOT EXISTS `projet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `projet`;

-- Listage de la structure de la table projet. administrator
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE IF NOT EXISTS `administrator` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table projet. docteur
DROP TABLE IF EXISTS `docteur`;
CREATE TABLE IF NOT EXISTS `docteur` (
  `docteur_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(35) NOT NULL,
  `lastname` varchar(35) NOT NULL,
  `specialite` varchar(12) NOT NULL,
  `licence` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`docteur_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table projet. patient
DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(35) NOT NULL,
  `lastname` varchar(35) NOT NULL,
  `ramq` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `ramq` (`ramq`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table projet. reservation
DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `reservation_id` int(11) NOT NULL AUTO_INCREMENT,
  `patientEmail` varchar(50) NOT NULL,
  `ramq` varchar(12) NOT NULL,
  `doctorEmail` varchar(50) NOT NULL,
  `temps` varchar(50) NOT NULL,
  `raison` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`reservation_id`),
  KEY `doctorEmail` (`doctorEmail`),
  KEY `patientEmail` (`patientEmail`),
  KEY `ramq` (`ramq`),
  CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`doctorEmail`) REFERENCES `docteur` (`email`),
  CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`patientEmail`) REFERENCES `patient` (`email`),
  CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`ramq`) REFERENCES `patient` (`ramq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table projet. resultat
DROP TABLE IF EXISTS `resultat`;
CREATE TABLE IF NOT EXISTS `resultat` (
  `resultat_id` int(11) NOT NULL AUTO_INCREMENT,
  `ramq` varchar(12) NOT NULL,
  `patientEmail` varchar(50) NOT NULL,
  `doctorEmail` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`resultat_id`),
  KEY `doctorEmail` (`doctorEmail`),
  KEY `patientEmail` (`patientEmail`),
  KEY `ramq` (`ramq`),
  CONSTRAINT `resultat_ibfk_1` FOREIGN KEY (`doctorEmail`) REFERENCES `docteur` (`email`),
  CONSTRAINT `resultat_ibfk_2` FOREIGN KEY (`patientEmail`) REFERENCES `patient` (`email`),
  CONSTRAINT `resultat_ibfk_3` FOREIGN KEY (`ramq`) REFERENCES `patient` (`ramq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
