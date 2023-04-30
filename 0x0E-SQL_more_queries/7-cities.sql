--  a script that creates the database hbtn_0d_usa and the table cities (in the database hbtn_0d_usa) on your MySQL server.
-- state_id INT, can’t be null and must be a FOREIGN KEY that references to id of the states table
-- If the database hbtn_0d_usa already exists, your script should not fail
-- If the table states already exists, your script should not fail

-- CREATING DATABASE
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;

-- SELECT DATABASE
USE hbtn_0d_usa;

-- CREATING TABLE
CREATE TABLE IF NOT EXISTS cities (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE, state_id INT NOT NULL, INDEX(state_id), FOREIGN KEY (state_id) REFERENCES states(id), name VARCHAR(256));
