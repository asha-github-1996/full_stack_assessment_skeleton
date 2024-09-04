CREATE DATABASE IF NOT EXISTS home_db;
USE home_db;
SET PERSIST local_infile = 1;
--  User table
CREATE TABLE `user` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `username` varchar(100) DEFAULT NULL,
    `email` varchar(100) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Home table
CREATE TABLE `home` (
    `id` int AUTO_INCREMENT PRIMARY KEY,
    `street_address` varchar(255) DEFAULT NULL,
    `state` varchar(50) NOT NULL,
    `zip` varchar(10) NOT NULL,
    `sqft` float DEFAULT NULL,
    `beds` int DEFAULT NULL,
    `baths` int DEFAULT NULL,
    `list_price` float DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- UserHome table
CREATE TABLE `users_homes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `home_id` INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (home_id) REFERENCES home(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- dumping data for table user
INSERT INTO `user` (id, username, email) VALUES
(1, 'user1', 'user1@example.org'),
(2, 'user2', 'user2@example.org'),
(3, 'user3', 'user3@example.org'),
(4, 'user4', 'user4@example.org'),
(5, 'user5', 'user5@example.org'),
(6, 'user6', 'user6@example.org'),
(7, 'user7', 'user7@example.org'),
(8, 'user8', 'user8@example.org'),
(9, 'user9', 'user9@example.org');

-- dumping data for table home
INSERT INTO `home` (id, street_address, state, zip, sqft, beds, baths, list_price) VALUES
(1, '72242 Jacobson Square', 'Arizona', '05378', 2945.89, 3, 2, 1000000),
(2, '75246 Cumberland Street', 'Arizona', '90210', 1500.25, 2, 1, 800000),
(3, '811 Walker-Bogan Terrace', 'Rhode Island', '19219', 2500, 4, 3, 1200000),
(4, '947 Allen Motorway', 'Massachusetts', '65353', 3000, 5, 4, 1500000),
(5, '7976 W Division Street', 'New Mexico', '99460', 1800, 3, 2, 900000),
(6, '4679 Horacio Plains', 'Texas', '62631', 2200, 4, 3, 1100000),
(7, '78089 Prospect Avenue', 'Nebraska', '37697', 1900, 3, 2, 950000),
(8, '975 Marty Ridges', 'New Jersey', '28721', 2100, 4, 3, 1050000),
(9, '40353 Main Street S', 'West Virginia', '77945', 2300, 4, 3, 1150000),
(10, '9919 Park Drive', 'Maine', '68269', 2300, 4, 3, 1150000),
(11, '642 Aaron Parkway', 'Maine', '69309', 2300, 4, 3, 1150000),
(12, '529 S Chestnut Street', 'Wyoming', '68181', 2300, 4, 3, 1150000),
(13, '4218 Louvenia Street', 'Ohio', '94585', 2300, 4, 3, 1150000),
(14, '9905 Rolfson Burgs', 'Kansas', '02468', 2300, 4, 3, 1150000),
(15, '7816 Depot Street', 'Iowa', '93347', 2300, 4, 3, 1150000),
(16, '125 4th Street', 'North Dakota', '86965', 2300, 4, 3, 1150000),
(17, '93346 Hoyt Trafficway', 'West Virginia', '35608', 2300, 4, 3, 1150000),
(18, '244 Lorenzo Expressway', 'Maine', '34630', 2300, 4, 3, 1150000),
(19, '4053 Mertz Ridge', 'South Carolina', '81773', 2300, 4, 3, 1150000),
(20, '592 N Pine Street', 'West Virginia', '35608', 2300, 4, 3, 1150000);

-- dumping data for table user_home
INSERT INTO `users_homes` (id, user_id, home_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6),
(7, 3, 7),
(8, 3, 8),
(9, 3, 9),
(10, 4, 2),
(11, 4, 11),
(12, 4, 12),
(13, 5, 4),
(14, 5, 14),
(15, 5, 15),
(16, 6, 16),
(17, 6, 17),
(18, 6, 2),
(19, 7, 19),
(20, 7, 20),
(21, 7, 3),
(22, 8, 4),
(23, 8, 5),
(24, 8, 6),
(25, 9, 7),
(26, 9, 8),
(27, 9, 9);
