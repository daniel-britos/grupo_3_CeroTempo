-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: cerotempo_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'fender','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'cremona','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'yamaha ','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(4,'Napex','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Strings','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'Wind','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'Percussion','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(4,'Idiophones','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(5,'Electronics','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1657280240540_img.jpg',1,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'1657280240541_img.jpg',1,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'1657280240544_img.jpg',1,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(4,'1657280240548_img.jpg',1,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(5,'1657280495755_img.jpg',2,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(6,'1657280495772_img.jpg',2,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(7,'1657280495783_img.jpg',2,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(8,'1657280495792_img.jpg',2,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(9,'1657280495796_img.jpg',2,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(10,'1657280606771_img.jpg',3,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(11,'1657280606773_img.jpg',3,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(12,'1657280606776_img.jpg',3,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(13,'1657280606777_img.jpg',3,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(14,'1657282390667_img.jpg',4,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(15,'1657282390669_img.jpg',4,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(16,'1657282390670_img.jpg',4,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(17,'1657282390670_img.jpg',4,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(18,'1657282550691_img.jpg',5,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(19,'1657282550692_img.jpg',5,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(20,'1657282550693_img.jpg',5,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(21,'1657282550694_img.jpg',5,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(22,'1657282752365_img.jpg',6,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(23,'1657282752369_img.jpg',6,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(24,'1657282752370_img.jpg',6,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(25,'1657282752371_img.jpg',6,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(26,'1657283374169_img.jpg',7,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(27,'1657283374170_img.jpg',7,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(28,'1657283374172_img.jpg',7,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(29,'1657283374173_img.jpg',7,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(30,'1657283648029_img.jpg',8,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(31,'1657283648029_img.jpg',8,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(32,'1657283648030_img.jpg',8,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(33,'1657283648031_img.jpg',8,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(34,'1657283716383_img.jpg',9,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(35,'1657283716383_img.jpg',9,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(36,'1657283716383_img.jpg',9,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(37,'1657283716383_img.jpg',9,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(38,'1657283880369_img.jpg',10,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(39,'1657283880371_img.jpg',10,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(40,'1657283880372_img.jpg',10,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(41,'1657283880374_img.jpg',10,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(42,'1657283974795_img.jpg',11,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(43,'1657283974795_img.jpg',11,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(44,'1657283974796_img.jpg',11,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(45,'1657283974798_img.jpg',11,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(46,'1657284066181_img.jpg',12,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(47,'1657284066188_img.jpg',12,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(48,'1657284066190_img.png',12,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(49,'1657284066193_img.png',12,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(50,'1657284168394_img.jpg',13,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(51,'1657284168396_img.jpg',13,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(52,'1657284168397_img.jpg',13,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(53,'1657284168398_img.jpg',13,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(54,'1657284392354_img.png',14,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(55,'1657284392356_img.png',14,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(56,'1657284392359_img.png',14,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(57,'1657284392361_img.jpg',14,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(58,'1657284526595_img.jpg',15,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(59,'1657284526595_img.jpg',15,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(60,'1657284526596_img.jpg',15,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(61,'1657284526596_img.jpg',15,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `modalities`
--

LOCK TABLES `modalities` WRITE;
/*!40000 ALTER TABLE `modalities` DISABLE KEYS */;
INSERT INTO `modalities` VALUES (1,'remote','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'face to face','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `modalities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cello Ancona',120000,10,'Cello madera maciza importado de Italia. con madera de 10 años de antiguedad','microafinadores,madera maciza,importado de italia',1,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'Guitarra Fender',150000,0,'Guitarra fender importada, directo de china','guitarra colores varios,metalica alma de madera,importada de china',1,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'Bajo Stratocaster',55000,12,'Bajo colores varios, clavijero metalico','bajo muchos colores,metal rigido,importado de china',1,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(4,'Bateria mapex',250000,15,'Bateria ultima linea madera importada','madera importada,resonancia maxima,palitos integrados',3,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(5,'Bateria generica',19999,25,'bateria generica fabricada por luthiers','4 tambores,nacional,colores varios',3,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(6,'bateria mapex tuned',110000,22,'bateria electrica ultima generación','electrica,made in china,todas las funciones disponibles',3,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(7,'trompeta imperio',25000,0,'trompeta nacional fabricada con el mejor material sonoro','instrumento de viento de calidad,fabricada en el pais,material de punta',2,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(8,'Saxofon lintop',66000,10,'saxofon importado de la mejor calidad, sonido amplio resonante','made in francia,bronce metalico',2,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(9,'Trompeta generica',22000,5,'Trompeta generica con amplia sonoridad para niveles intermedio','metal pintado,fabricacion nacional',2,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(10,'Viola Cremona',80000,10,'Viola enchapada para principiante, excelente resonancia','made in china,madera maciza,microafinadores',4,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(11,'Piano italiano',350000,20,'Piano fabricado por luthiers itelianos de 40 años de antiguedad','fabricado en italia,maderas macizas,funcionalidad completa',4,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(12,'Piano pared',220000,10,'Piano pared antiguo','madera de pino de 90 años,funcionalidad y resonancia perfecta',4,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(13,'Afinador mapex',10000,10,'Afinador mapex perfecciona el sonido','made in china,afinador electrico con cargador',5,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(14,'Teclado Yamaha',50000,10,'Teclado electrico de ultima linea','made in china,incluye cargador,tamaño large',5,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(15,'Teclado generico',23000,0,'Teclado generico con cargodor, sonido perfecto','tamaño small,cargador,conectores,con soporte',5,NULL,'2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220705222819-create-category.js'),('20220705223018-create-brand.js'),('20220705223257-create-modality.js'),('20220705223357-create-time.js'),('20220705223936-create-user.js'),('20220705224537-create-product.js'),('20220705224831-create-course.js'),('20220705225008-create-image.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `times`
--

LOCK TABLES `times` WRITE;
/*!40000 ALTER TABLE `times` DISABLE KEYS */;
INSERT INTO `times` VALUES (1,'morning','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(2,'afternoon','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'night','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL);
/*!40000 ALTER TABLE `times` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Daniela','Britos','danielbritospersonal@gmail.com','1986-06-10 00:00:00','admin','$2a$10$hGQbqSs9c33tHwZb4AJtt.dTiv/Hr0m.xYd79yiJf6VINdJM9Rnx2','1657503982704_img.jpg','2022-07-10 21:03:44','2022-07-11 01:46:36',NULL),(2,'Clark','Kent','clarkent@gmail.com','1986-06-10 00:00:00','user','$2a$10$JZ1/owAwoN/.y8XOv5imT.hxcBNfvNUxTVlNh/KPLQvalMCzPJsO6','1655740343910_img.jpg','2022-07-10 21:03:44','2022-07-10 21:03:44',NULL),(3,'test','test','test@test.com','2022-07-10 00:00:00','user','$2a$10$j9La0PLzx1hB1Tnp5lTB0.gR4Mzk3Xk6tuaRTKa9qb.QB/OCc65Ge','1657505519624_img.jpg','2022-07-11 02:11:59','2022-07-11 02:17:56',NULL),(5,'prueba','prueba','prueba@prueba.com','2022-07-10 00:00:00','user','$2a$10$dLhBKs.F4xXm88XiYr4a..kZLAuOCoC0J76O8VEdIpWUbJpj5SdxK','default-image-avatar.png','2022-07-11 02:25:14','2022-07-11 02:25:14',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cerotempo_db'
--

--
-- Dumping routines for database 'cerotempo_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-10 23:50:23
