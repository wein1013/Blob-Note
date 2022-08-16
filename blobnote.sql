/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.7.30-log : Database - blobnote
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blobnote` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `blobnote`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `content` text,
  `cate` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cate` (`cate`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`cate`) REFERENCES `cate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `article` */

insert  into `article`(`id`,`title`,`desc`,`content`,`cate`,`created_at`,`updated_at`) values 
(1,'test1','测试文章哈哈的骄傲和巨大','??fs撒娇复活节恢复健康拉风了机卡分离开始发货拉科活佛来上课法哈勒孔金粉莉哈乐看实际发货拉快捷回复拉萨机奥利弗和就奥利弗那些存在明显v内裤就覅偶就阿斯顿',1,'2022-08-16 19:27:35',NULL);

/*Table structure for table `cate` */

DROP TABLE IF EXISTS `cate`;

CREATE TABLE `cate` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `cate` */

insert  into `cate`(`id`,`name`,`created_at`,`updated_at`) values 
(1,'技术文章','2022-08-16 19:24:24',NULL),
(2,'生活随笔','2022-08-16 19:24:32',NULL);

/*Table structure for table `info` */

DROP TABLE IF EXISTS `info`;

CREATE TABLE `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `subtitle` varchar(30) DEFAULT NULL,
  `about` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `info` */

insert  into `info`(`id`,`title`,`subtitle`,`about`,`created_at`,`updated_at`) values 
(1,'BLOBNOTE','关于我们','关于我们的博客\r\n啊空间的卡了就卡了巨大石块了\r\n吉安卡罗大家看了觉得\r\n喀什假大空洛杉矶的\r\n你打开的那就亏大了\r\n打开就打开了的\r\n大陆空军大陆空军的\r\n打开就打uwi就卡了就打开了啊空间大\r\n打开链接大地起舞i哦群众农村','2022-08-16 19:39:36',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
