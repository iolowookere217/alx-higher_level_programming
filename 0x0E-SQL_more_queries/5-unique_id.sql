-- a script that creates the table unique_id on your MySQL server.
-- id has default value of 1 and is unique
-- database name is passed in the command line
-- If the table unique_id already exists, it should not fail

CREATE TABLE IF NOT EXISTS unique_id (id INT DEFAULT 1 UNIQUE, name VARCHAR(256));
