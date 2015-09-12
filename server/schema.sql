
DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   id INTEGER NULL AUTO_INCREMENT DEFAULT NULL
--   create_at TIMESTAMP  -- Describe your table here.
-- );

-- CREATE TABLE users (

-- );

-- CREATE TABLE chatrooms (

-- );
-- /* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;


-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body` VARCHAR(200) NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `id_chatrooms` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'chatrooms'
-- 
-- ---

DROP TABLE IF EXISTS `chatrooms`;
    
CREATE TABLE `chatrooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (id_chatrooms) REFERENCES `chatrooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `chatrooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`body`,`id_users`,`id_chatrooms`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `chatrooms` (`id`,`roomName`) VALUES
-- ('','');
-- INSERT INTO `users` (`username`) VALUES ("beasta");
-- INSERT INTO `messages` (`body`,`id_users`,`id_chatrooms`) VALUES ('a message ','1','1');