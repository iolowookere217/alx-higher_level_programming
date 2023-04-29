-- a script that creates the table id_not_null on a MySQL server.
-- it doesnt fail if table exists
-- it has id with a default value of 1
-- database name is passed as an argument into the mysql command

CREATE TABLE IF NOT EXISTS id_not_null(id INT DEFAULT 1, name VARCHAR(256));
