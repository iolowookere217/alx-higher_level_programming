--  a script that creates the database hbtn_0d_usa and the table states (in the database hbtn_0d_usa) on your MySQL server.
-- If the database hbtn_0d_usa already exists, your script should not fail
-- If the table states already exists, your script should not fail

-- CREATING DATABASE
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;

-- SELECT DATABASE
USE hbtn_0d_usa;

-- CREATING TABLE
CREATE TABLE IF NOT EXISTS states (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE, name VARCHAR(256) NOT NULL);
