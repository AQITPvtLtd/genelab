-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2024 at 09:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `genelab`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL,
  `prescription` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `first_name`, `last_name`, `phone`, `email`, `message`, `prescription`) VALUES
('0dbe3e39-f02e-412e-873c-f0d812dad02b', '', '', 'palak@gmail.com', '', '', '1715598480034test1.jpg'),
('2e36c444-54d1-42be-bf72-65478cf492c0', 'palak', '', '', '', '', '17155995278894.webp'),
('2fe50d0c-ca36-4f2a-8a57-67684d515e05', 'palak', '', '', '', '', '1715597792207contactDesign2.png'),
('340ba5de-c42c-4022-8a38-494e64feca7b', '', '', '', '', '', '17155986052874.webp'),
('44657686-c9f9-4ad8-9d49-5d1632199157', '', '', '', '', '', '17155985451174.webp'),
('447251c4-2a26-4f77-99b4-b3f2f4866f16', '', '', '', '1234567876', '', '1715597882259aboutus.png'),
('676baea1-91b3-4048-b6fb-1f262894dd38', '', '', '', '', '', '17155985939624.webp'),
('87c26928-ceb1-4ae3-9a4f-1892dde352f0', '', '', '', '', '', '1715597897976contactDesign2.png'),
('90968a8e-1c52-4839-9922-ec1778bcc19a', '', '', '', '', '', '17155985756554.webp'),
('97338e62-de30-4286-bc4d-9883ad222607', 'palak', '', '', '', '', '17155995818994.webp'),
('fd663966-8c71-482d-86aa-9852f6429a29', '', '', '', '', '', '1715598413672contactDesign2.png');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `content` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `name`, `content`, `image`, `url`) VALUES
('0a605112-4499-4a66-b767-1d1227409c37', 'GENETIC COUNSELING SERVICES', 'Genelab offers genetic counseling services to cancer patients and their families to help them understand the implications of genetic testing results, explore personalized risk assessment, and make inf', '17158429311976.jpg', ''),
('30ec15e7-40b9-42df-ab3b-506cdce14952', 'COMPREHENSIVE CANCER PANEL TESTING', 'Genelab offers comprehensive panel testing that examines a wide range of genes associated with various types of cancer. This testing approach provides a comprehensive assessment of an individual\'s gen', '17158417707051.png', ''),
('40552c8f-2cd5-4513-aa5f-4e164be77e92', 'HEREDITARY CANCER GENE TESTING', 'Genelab conducts testing for specific genes known to be associated with hereditary cancer syndromes, such as BRCA1 and BRCA2 for breast and ovarian cancer, Lynch syndrome genes (MLH1, MSH2, MSH6, PMS2', '17158423659142.jpg', ''),
('54bcd0dc-5028-4b11-a742-7006474a76e6', 'LIQUID BIOPSY', 'Genelab provides liquid biopsy testing, which involves analyzing circulating tumor DNA (ctDNA) and other biomarkers in blood or other bodily fluids. Liquid biopsy can detect genetic alterations in can', '17158425551704.webp', ''),
('a033b272-c49e-4255-b6f4-a83a3c13f6de', 'TUMOR PROFILING', 'Genelab offers tumor profiling services to analyze the genetic makeup of cancer cells, including mutations, gene fusions, and other genomic alterations. Tumor profiling can provide valuable informatio', '17158423836053.jpeg', ''),
('feca0029-9225-474e-b82a-0397374516d8', 'PHARMACOGENOMIC TESTING', 'Genelab conducts pharmacogenomic testing to identify genetic variations that may affect an individual\'s response to cancer treatments, including chemotherapy drugs, targeted therapies, and immunothera', '1715842872475download.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
('1', 'admin', 'tekbooster22@gmail.com', 'TekBooster1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
