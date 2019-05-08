-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 07 mai 2019 à 23:58
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dooble`
--

-- --------------------------------------------------------

--
-- Structure de la table `dates`
--

DROP TABLE IF EXISTS `dates`;
CREATE TABLE IF NOT EXISTS `dates` (
  `date` date DEFAULT NULL,
  `idPropositions` int(11) NOT NULL,
  PRIMARY KEY (`idPropositions`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `dates`
--

INSERT INTO `dates` (`date`, `idPropositions`) VALUES
('2019-01-25', 1),
('2019-01-26', 2),
('2019-01-27', 3),
('0012-07-11', 4),
('0013-07-11', 5);

-- --------------------------------------------------------

--
-- Structure de la table `dateslieus`
--

DROP TABLE IF EXISTS `dateslieus`;
CREATE TABLE IF NOT EXISTS `dateslieus` (
  `date` date DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `idPropositions` int(11) NOT NULL,
  PRIMARY KEY (`idPropositions`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lieus`
--

DROP TABLE IF EXISTS `lieus`;
CREATE TABLE IF NOT EXISTS `lieus` (
  `lieu` varchar(255) DEFAULT NULL,
  `idPropositions` int(11) NOT NULL,
  PRIMARY KEY (`idPropositions`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `participants`
--

DROP TABLE IF EXISTS `participants`;
CREATE TABLE IF NOT EXISTS `participants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `allergies` varchar(255) DEFAULT NULL,
  `clearCode` varchar(255) DEFAULT NULL,
  `lienUnique` varchar(255) DEFAULT NULL,
  `preference` varchar(255) DEFAULT NULL,
  `present` bit(1) NOT NULL,
  `sondage_id` int(11) DEFAULT NULL,
  `utilisateur_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_8124s7u60pp94i8wiu8onimwc` (`sondage_id`),
  KEY `FK_pqma4s1ai8ngqag8299c909qh` (`utilisateur_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `propositions`
--

DROP TABLE IF EXISTS `propositions`;
CREATE TABLE IF NOT EXISTS `propositions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aUnDejeuner` bit(1) NOT NULL,
  `estValider` bit(1) NOT NULL,
  `monSondage_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2db81110cdb3ei7goaiobh2p0` (`monSondage_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `propositions`
--

INSERT INTO `propositions` (`id`, `aUnDejeuner`, `estValider`, `monSondage_id`) VALUES
(1, b'0', b'0', 1),
(2, b'0', b'0', 1),
(3, b'1', b'0', 1),
(4, b'0', b'0', 2),
(5, b'0', b'0', 2);

-- --------------------------------------------------------

--
-- Structure de la table `propositions_utilisateurs`
--

DROP TABLE IF EXISTS `propositions_utilisateurs`;
CREATE TABLE IF NOT EXISTS `propositions_utilisateurs` (
  `mesPropositions_id` int(11) NOT NULL,
  `mesUtilisateurs_id` int(11) NOT NULL,
  KEY `FK_tkyx5hij7id8pbmvc9rjcvx1f` (`mesUtilisateurs_id`),
  KEY `FK_dbjojxsuia3srewm91nb6vcxt` (`mesPropositions_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `sondages`
--

DROP TABLE IF EXISTS `sondages`;
CREATE TABLE IF NOT EXISTS `sondages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intitule` varchar(255) DEFAULT NULL,
  `lienInscription` varchar(255) DEFAULT NULL,
  `lienRapport` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `leResponsable_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5jjr6i5e1r90lgn1pkukff9u9` (`leResponsable_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sondages`
--

INSERT INTO `sondages` (`id`, `intitule`, `lienInscription`, `lienRapport`, `resume`, `leResponsable_id`) VALUES
(1, 'Point de stage constant', NULL, NULL, 'Nous allons parler de la suite de son stage', 1),
(2, 'Réunion d\'information des alternants', NULL, NULL, 'Réunion d\'information des alternants  ', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `email`, `nom`, `prenom`) VALUES
(1, 'edalison@niji.com', 'DALISSON', 'Emmanuel'),
(2, 'clangnito@niji.com', 'LANGNITO', 'Constant'),
(3, 'wvignole@niji.com', 'VIGNOLE', 'William'),
(4, 'vlebianic@niji.com', 'LEBIANIC', 'Vincent'),
(5, 'svilon@niji.com', 'VILON', 'Sebastien'),
(6, 'chabi@niji.com', 'CHABI', 'Maxime');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
