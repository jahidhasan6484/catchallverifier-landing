-- AlterTable
ALTER TABLE `BulkEmailList` ADD COLUMN `workFlow` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `SingleEmailList` ADD COLUMN `debounceStatus` VARCHAR(191) NULL,
    ADD COLUMN `millionverifierStatus` VARCHAR(191) NULL,
    ADD COLUMN `reoonStatus` VARCHAR(191) NULL,
    ADD COLUMN `workFlow` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `WorkFlow` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `workFlow` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `WorkFlow_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkFlow` ADD CONSTRAINT `WorkFlow_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
