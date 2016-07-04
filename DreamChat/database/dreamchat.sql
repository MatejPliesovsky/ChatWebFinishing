-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: Pi 10.Jún 2016, 18:22
-- Verzia serveru: 5.6.17
-- Verzia PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databáza: `dreamchat`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `conversations`
--
DROP DATABASE IF EXISTS dreamchat;

CREATE DATABASE dreamchat;
USE dreamchat;

CREATE TABLE IF NOT EXISTS `conversations` (
  `conversationID` int(11) NOT NULL AUTO_INCREMENT,
  `user1` int(11) NOT NULL,
  `user2` int(11) NOT NULL,
  PRIMARY KEY (`conversationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `friendships`
--

CREATE TABLE IF NOT EXISTS `friendships` (
  `friendshipID` int(11) NOT NULL AUTO_INCREMENT,
  `user1` int(11) NOT NULL,
  `user2` int(11) NOT NULL,
  PRIMARY KEY (`friendshipID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=7 ;

--
-- Sťahujem dáta pre tabuľku `friendships`
--

INSERT INTO `friendships` (`friendshipID`, `user1`, `user2`) VALUES
(1, 1, 3),
(2, 1, 2),
(6, 4, 1);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `friend_requests`
--

CREATE TABLE IF NOT EXISTS `friend_requests` (
  `requestID` int(11) NOT NULL AUTO_INCREMENT,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  PRIMARY KEY (`requestID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `messageID` int(11) NOT NULL AUTO_INCREMENT,
  `conversationID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `message` text COLLATE utf8_bin NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`messageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `tokens`
--

CREATE TABLE IF NOT EXISTS `tokens` (
  `userID` int(5) NOT NULL,
  `token` char(32) NOT NULL,
  UNIQUE KEY `token` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Sťahujem dáta pre tabuľku `tokens`
--

INSERT INTO `tokens` (`userID`, `token`) VALUES
(1, '172357a15af2abf63e9f69d4be0ad4');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userID` int(5) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` char(15) DEFAULT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `surname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `avatar` char(1) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Sťahujem dáta pre tabuľku `users`
--

INSERT INTO `users` (`userID`, `nickname`, `email`, `password`, `phone`, `name`, `surname`, `avatar`) VALUES
(1, 'nemamradgulas', 'vymysleny@email.com', 'hesloheslo', '0900000123', 'jano', 'varecha', NULL),
(2, 'mickeymouse', 'mickey@mouse.sk', 'hesloheslo', '0901010010', 'mickey', 'mouse', NULL),
(3, 'oskar', 'zase@prace.com', 'hesloheslo', '0900000124', 'Oskar', 'Chmeľ', NULL),
(4, 'donaldTrumpz', 'fake@donald.com', 'hesloheslo', '0901010011', 'Donald', 'McTrumpz', NULL),
(5, 'dominikkolesar', 'dominik@kolesar.sk', 'hesloheslo', '0944444444', 'Dominik', 'Kolesár', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
