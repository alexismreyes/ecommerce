/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 8.4.0 : Database - ecommerce_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ecommerce_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `ecommerce_db`;

/*Table structure for table `Address` */

DROP TABLE IF EXISTS `Address`;

CREATE TABLE `Address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `country` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Address` */

/*Table structure for table `Cart` */

DROP TABLE IF EXISTS `Cart`;

CREATE TABLE `Cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Cart` */

/*Table structure for table `CartItem` */

DROP TABLE IF EXISTS `CartItem`;

CREATE TABLE `CartItem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `CartItem_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `Cart` (`id`),
  CONSTRAINT `CartItem_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `CartItem` */

/*Table structure for table `Category` */

DROP TABLE IF EXISTS `Category`;

CREATE TABLE `Category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Category` */

insert  into `Category`(`id`,`name`) values (8,'Automotriz'),(6,'Belleza y cuidado personal'),(10,'Comestibles'),(7,'Deportes y exteriores'),(1,'Electrónicos'),(4,'Hogar & Cocina'),(5,'Juegos'),(2,'Libros'),(3,'Ropa'),(9,'Salud');

/*Table structure for table `Order` */

DROP TABLE IF EXISTS `Order`;

CREATE TABLE `Order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Order` */

/*Table structure for table `OrderItem` */

DROP TABLE IF EXISTS `OrderItem`;

CREATE TABLE `OrderItem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `OrderItem_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`),
  CONSTRAINT `OrderItem_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `OrderItem` */

/*Table structure for table `Payment` */

DROP TABLE IF EXISTS `Payment`;

CREATE TABLE `Payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `method` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `Payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Payment` */

/*Table structure for table `Product` */

DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `stock` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Product` */

insert  into `Product`(`id`,`name`,`description`,`price`,`stock`,`category_id`,`created_at`) values (1,'Smartphone','Latest model with high-resolution display and fast processor',699.99,30,1,'2024-06-29 14:58:49'),(2,'Bluetooth Headphones','Noise-canceling over-ear headphones with Bluetooth connectivity',149.99,50,1,'2024-06-29 14:58:49'),(3,'The Great Gatsby','Classic novel by F. Scott Fitzgerald',10.99,100,2,'2024-06-29 14:58:49'),(4,'1984','Dystopian novel by George Orwell',9.99,100,2,'2024-06-29 14:58:49'),(5,'Men\'s T-Shirt','Comfortable cotton t-shirt available in various colors',19.99,200,3,'2024-06-29 14:58:49'),(6,'Women\'s Jeans','Stylish and comfortable denim jeans',39.99,150,3,'2024-06-29 14:58:49'),(7,'Blender','High-power blender for smoothies and soups',79.99,40,4,'2024-06-29 14:58:49'),(8,'Cookware Set','Non-stick cookware set with various sizes of pots and pans',129.99,30,4,'2024-06-29 14:58:49'),(9,'Board Game','Fun strategy board game for the whole family',29.99,60,5,'2024-06-29 14:58:49'),(10,'Video Game Console','Latest generation gaming console with multiple games',399.99,25,5,'2024-06-29 14:58:49'),(11,'Hair Dryer','Powerful hair dryer with multiple heat settings',49.99,80,6,'2024-06-29 14:58:49'),(12,'Skin Care Set','Complete skin care set with cleanser, toner, and moisturizer',59.99,100,6,'2024-06-29 14:58:49'),(13,'Running Shoes','Lightweight and comfortable running shoes',79.99,120,7,'2024-06-29 14:58:49'),(14,'Yoga Mat','Non-slip yoga mat for all types of exercises',29.99,150,7,'2024-06-29 14:58:49'),(15,'Car Vacuum Cleaner','Portable vacuum cleaner for cars with various attachments',39.99,60,8,'2024-06-29 14:58:49'),(16,'Car Phone Mount','Adjustable phone mount for car dashboard or windshield',19.99,100,8,'2024-06-29 14:58:49'),(17,'Vitamins','Multivitamin supplements for daily health',19.99,200,9,'2024-06-29 14:58:49'),(18,'Fitness Tracker','Wearable fitness tracker with heart rate monitor and GPS',99.99,70,9,'2024-06-29 14:58:49'),(19,'Organic Coffee Beans','Premium organic coffee beans for a rich and smooth taste',14.99,80,10,'2024-06-29 14:58:49'),(20,'Granola Bars','Healthy and delicious granola bars in various flavors',6.99,150,10,'2024-06-29 14:58:49');

/*Table structure for table `Review` */

DROP TABLE IF EXISTS `Review`;

CREATE TABLE `Review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Review_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`),
  CONSTRAINT `Review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`),
  CONSTRAINT `Review_chk_1` CHECK (((`rating` >= 1) and (`rating` <= 5)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `Review` */

/*Table structure for table `User` */

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `User` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
