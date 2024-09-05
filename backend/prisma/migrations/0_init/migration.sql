-- CreateTable
CREATE TABLE `home` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street_address` VARCHAR(255) NULL,
    `state` VARCHAR(50) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `sqft` FLOAT NULL,
    `beds` INTEGER NULL,
    `baths` INTEGER NULL,
    `list_price` FLOAT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_home` (
    `username` VARCHAR(100) NULL,
    `email` VARCHAR(100) NULL,
    `street_address` VARCHAR(255) NULL,
    `state` VARCHAR(50) NULL,
    `zip` VARCHAR(10) NULL,
    `sqft` FLOAT NULL,
    `beds` INTEGER NULL,
    `baths` INTEGER NULL,
    `list_price` FLOAT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_homes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `home_id` INTEGER NOT NULL,

    INDEX `home_id`(`home_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users_homes` ADD CONSTRAINT `users_homes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users_homes` ADD CONSTRAINT `users_homes_ibfk_2` FOREIGN KEY (`home_id`) REFERENCES `home`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

