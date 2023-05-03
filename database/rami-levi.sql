-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2023 at 09:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rami-levi`
--
CREATE DATABASE IF NOT EXISTS `rami-levi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rami-levi`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`) VALUES
(1, 'fruits'),
(2, 'vegetables'),
(3, 'dairyProducts'),
(4, 'meet'),
(5, 'cleanliness'),
(6, 'Sweets'),
(7, 'basic');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `creationTime` datetime NOT NULL,
  `expirationTime` datetime NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imageName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `name`, `categoryId`, `creationTime`, `expirationTime`, `price`, `imageName`) VALUES
(65, 'chocolate', 6, '2012-02-23 00:00:00', '2013-05-24 00:00:00', 12.00, '10dbb95e-734e-468e-aa6c-6b0a526bc151.jpg'),
(69, 'milk', 3, '2023-05-30 21:40:00', '2023-05-08 21:37:00', 5.50, '4e7af11a-bbd5-4c69-89fe-448915a20994.jpg'),
(70, 'Bleach', 5, '2023-05-01 21:48:00', '2029-10-30 03:50:00', 12.90, '86b02c5c-ddc4-4394-88a6-11e8b9b670a9.jpg'),
(71, 'Yellow cheese', 3, '2023-05-30 21:59:00', '2023-05-29 21:04:00', 23.80, 'df83fe5a-0882-4f87-afbf-cdb989508381.jpg'),
(72, 'Pickled meat', 4, '2023-05-24 01:08:00', '2023-06-02 22:08:00', 60.00, '87348400-1186-431d-b76d-2f2fe2767e49.jpg'),
(73, 'candies', 6, '2023-05-23 22:13:00', '2023-05-31 04:09:00', 9.80, '09d5c8d3-48ad-4231-ada7-8a1a244b17f8.jpg'),
(74, 'bread', 7, '2023-05-17 16:15:00', '2023-05-24 18:19:00', 6.90, '8490f591-ec03-46b5-b1e8-c655e020b737.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
