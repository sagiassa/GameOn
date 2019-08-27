use sql_project;
-- DELETE FROM mygames;
-- CREATE TABLE mygames (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     u_id TEXT,
--     post_id INT
-- );
-- DELETE FROM myfriends;
-- INSERT INTO myfriends VALUES('uHVbTsik9zZQsAPtxRH6O5ncwJv2','top player ever');
-- CREATE TABLE MyFriends (
--     u_id TEXT,
--     friend_username TEXT
-- );
-- DELETE FROM user_filters
-- WHERE u_id = 'qqREYrFU63NO5o6Tp6LZgGuEqUR2';
-- DROP TABLE user_filters;
-- CREATE TABLE user_filters (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     u_id TEXT,
--     sport TEXT,
--     age VARCHAR(5),
--     level TEXT
-- );
-- CREATE TABLE users ( 
--         id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--         first_name TEXT,
--         last_name TEXT,
--         gender VARCHAR(1),
--         email TEXT,
--         phone_number INT,
--         username TEXT,
--         password TEXT,
--         uid TEXT
-- );
-- DROP TABLE posts_count;
-- DROP TABLE posts;
-- CREATE TABLE posts ( 
--     post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     sport TEXT,
--     gender VARCHAR(1),
--     age VARCHAR(5),
--     level TEXT,
--     day TEXT,
--     TIME TEXT,
--     city TEXT,
--     court_name TEXT,
--     numOfPlayers INT
-- );

-- CREATE TABLE posts_count (
--     posts_id INT,
--     count INT
-- );
-- INSERT INTO user_filters VALUES('1', 'sdsdfdfssfgd', 'basketball','M','11-15',  'pro');
-- INSERT INTO user_filters VALUES('2', '15-17', 'basketball', 'not that bad');

-- INSERT INTO posts VALUES(null, 'basketball', 'M', '11-15', 'pro', '22/08/2019', '12:00', 'tel-aviv', 'kedem', 'the hood', 10)
-- INSERT INTO posts VALUES(null, 'basketball', 'M', '15-17', 'not that bad', '23/08/2019', '18:00', 'tel-aviv', 'tavor', 'the streets', 10)

-- SELECT p.day, p.time, p.city, p.cort_name, p.numOfPlayers
-- FROM posts AS p, user_filters AS u, users
-- WHERE users.user_id = 1
-- AND u.id = users.user_id
-- AND p.post_id= users.user_id;
-- AND p.level = u.level 
-- AND p.age = u.level ;

-- SELECT p.day, p.time, p.city, p.cort_name, p.numOfPlayers
-- FROM posts AS p
-- WHERE p.time = "18:00";

--function that finds the users id by his his email::::::
-- SELECT user_id
-- FROM  users AS u
-- WHERE u.email = "aka@gmail.com";



