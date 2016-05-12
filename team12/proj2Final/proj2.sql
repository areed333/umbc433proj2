-- phpMyAdmin SQL Dump
-- version 4.0.10.15
-- http://www.phpmyadmin.net
--
-- Host: studentdb-maria.gl.umbc.edu
-- Generation Time: May 11, 2016 at 10:01 PM
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

--
-- Dumping data for table `proj2`
--

INSERT INTO `proj2` (`StudentID`, `FirstName`, `LastName`, `Email`, `ClassStanding`, `QuestionsComments`, `ReqCMSC`, `ReqMATH`, `ReqSCIE`, `ElecCMSC`, `OtherCMSC`) VALUES
('AA12345', 'student', 'student', 'ej@umbc.edu', 'Freshman', 'question', 'CMSC 341,CMSC 331,CMSC 313,CMSC 304,CMSC 203,CMSC 202,CMSC 201', 'MATH 221,MATH 152,MATH 151', 'cLab 102,CHEM 102,CHEM 101,BIOL 142,BIOL 141', 'CMSC 435,CMSC 431', 'CMSC 427,CMSC 352,CMSC 232'),
('jj29383', 'slkj', 'lkjs', 'sldk@lksdj.com', 'Freshman', 'sf', 'CMSC201', '', '', '', ''),
('jj29999', 'lkj', 'lkj', 'jk@kj.com', 'Freshman', 'df', 'CMSC201, CMSC202, CMSC203, CMSC313, CMSC331, CMSC341, CMSC421', 'MATH151, MATH152', 'BIOL100, BIOL301', '', 'CMSC232, CMSC352'),
('kk19299', 'ksl', 'kls', 'dkl@kld.com', 'Freshman', '', '', 'MATH151', 'BIOL100, BIOL301, BIOL141, BIOL142', '', ''),
('kk29929', 'sdlkf', 'lk', 'kld@lkd.com', 'Freshman', '', '', '', 'BIOL100, BIOL301, BIOL141', '', ''),
('sd12999', 'elj', 'sldkfj', 'skl@slkd.com', 'Freshman', 's', 'CMSC201, CMSC202, CMSC203, CMSC341, CMSC441', 'MATH151, MATH152', '', '', ''),
('ss22222', 'sdf', 'sdf', 'sdd@ggsm.com', 'Freshman', 'sfd', 'CMSC201, CMSC202, CMSC203, CMSC313, CMSC331, CMSC341, CMSC411, CMSC421', 'MATH151', 'BIOL100', 'CMSC427', 'CMSC232, CMSC352');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
