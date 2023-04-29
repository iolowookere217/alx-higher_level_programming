--  a script that creates the MySQL server user user_0d_1 with all privileges.
-- having password set to user_0d_1_pwd
-- and does not fail if user already exists.

CREATE USER IF NOT EXISTS user_0d_1@localhost
IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL
ON *.*
TO user_0d_1@localhost
