-- AlterTable
ALTER TABLE `BulkEmailList` ADD COLUMN `debounceRequestInProgress` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `BulkEmailListItem` ADD COLUMN `debounceApiRequestId` VARCHAR(191) NULL,
    ADD COLUMN `debounceStatus` VARCHAR(191) NULL,
    ADD COLUMN `isFreeEmail` BOOLEAN NULL,
    ADD COLUMN `millionverifierApiRequestId` VARCHAR(191) NULL,
    ADD COLUMN `millionverifierStatus` VARCHAR(191) NULL,
    ADD COLUMN `reoonApiRequestId` VARCHAR(191) NULL,
    ADD COLUMN `reoonStatus` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ReoonApiRequest` (
    `requestId` VARCHAR(191) NOT NULL,
    `inProgress` BOOLEAN NOT NULL,
    `total` INTEGER NOT NULL,
    `done` INTEGER NOT NULL,
    `checkedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `bulkEmailListId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`requestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MillionverifierApiRequest` (
    `requestId` VARCHAR(191) NOT NULL,
    `inProgress` BOOLEAN NOT NULL,
    `total` INTEGER NOT NULL,
    `done` INTEGER NOT NULL,
    `checkedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `bulkEmailListId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`requestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DebounceApiRequest` (
    `requestId` VARCHAR(191) NOT NULL,
    `inProgress` BOOLEAN NOT NULL,
    `total` INTEGER NOT NULL,
    `done` INTEGER NOT NULL,
    `checkedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `bulkEmailListId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`requestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_reoonApiRequestId_fkey` FOREIGN KEY (`reoonApiRequestId`) REFERENCES `ReoonApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_millionverifierApiRequestId_fkey` FOREIGN KEY (`millionverifierApiRequestId`) REFERENCES `MillionverifierApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_debounceApiRequestId_fkey` FOREIGN KEY (`debounceApiRequestId`) REFERENCES `DebounceApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReoonApiRequest` ADD CONSTRAINT `ReoonApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MillionverifierApiRequest` ADD CONSTRAINT `MillionverifierApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DebounceApiRequest` ADD CONSTRAINT `DebounceApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
