-- overwrite/drop database if it already exists
DROP DATABASE IF EXISTS burger_db;
-- create database
CREATE DATABASE burger_db;
-- tell mysql to use this database
USE burger_db;

-- create table inside database
CREATE TABLE burgers
(
    -- each burger created will have an id, a name, and a boolean column for whether or not they have been 'devoured'
    id INT AUTO_INCREMENT NOT NULL,
    burger_names VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    
    PRIMARY KEY (id)
);