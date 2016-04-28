-- phpMyAdmin SQL Dump
-- version 4.0.10.15
-- http://www.phpmyadmin.net
--
-- Host: studentdb-maria.gl.umbc.edu
-- Generation Time: Apr 19, 2016 at 04:16 PM
-- Server version: 10.0.24-MariaDB-wsrep
-- PHP Version: 5.4.44

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ejohn3`
--

-- --------------------------------------------------------

--
-- Table structure for table `proj2`
--

CREATE TABLE IF NOT EXISTS `proj2` (
  `StudentID` varchar(7) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `ClassStanding` varchar(10) NOT NULL,
  `QuestionsComments` text NOT NULL,
  `ReqCMSC` text NOT NULL,
  `ReqMATH` tinytext NOT NULL,
  `ReqSCIE` text NOT NULL,
  `ElecCMSC` text NOT NULL,
  `OtherCMSC` text NOT NULL,
  PRIMARY KEY (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
