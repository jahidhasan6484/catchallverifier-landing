-- CreateTable
CREATE TABLE `AdminUser` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `permission` ENUM('DEFAULT') NOT NULL DEFAULT 'DEFAULT',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AdminUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `credit` INTEGER NOT NULL DEFAULT 0,
    `sync` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PricingPlan` (
    `id` VARCHAR(191) NOT NULL,
    `rangeFrom` INTEGER NOT NULL,
    `rangeTo` INTEGER NOT NULL,
    `credit` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CheckoutSession` (
    `id` VARCHAR(191) NOT NULL,
    `credit` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentIntent` (
    `paymentIntentId` VARCHAR(191) NOT NULL,
    `customerName` VARCHAR(191) NOT NULL,
    `customerEmail` VARCHAR(191) NOT NULL,
    `credit` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `paymentStatus` VARCHAR(191) NOT NULL,
    `checkoutSessionId` VARCHAR(191) NOT NULL,
    `creditChangeId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PaymentIntent_checkoutSessionId_key`(`checkoutSessionId`),
    UNIQUE INDEX `PaymentIntent_creditChangeId_key`(`creditChangeId`),
    PRIMARY KEY (`paymentIntentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CreditChange` (
    `id` VARCHAR(191) NOT NULL,
    `change` INTEGER NOT NULL,
    `type` ENUM('ORDER', 'SINGLEVERIFICATION', 'BULKVERIFICATION', 'ADMIN') NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `verifiedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResetPasswordToken` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `verifiedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ResetPasswordToken_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SingleEmailList` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `icypeasApiId` VARCHAR(191) NULL,
    `bouncebanApiId` VARCHAR(191) NULL,
    `enrowApiId` VARCHAR(191) NULL,
    `icypeasStatus` VARCHAR(191) NULL,
    `bouncebanStatus` VARCHAR(191) NULL,
    `trueinboxStatus` VARCHAR(191) NULL,
    `enrowStatus` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `creditChangeId` VARCHAR(191) NULL,

    UNIQUE INDEX `SingleEmailList_icypeasApiId_key`(`icypeasApiId`),
    UNIQUE INDEX `SingleEmailList_bouncebanApiId_key`(`bouncebanApiId`),
    UNIQUE INDEX `SingleEmailList_enrowApiId_key`(`enrowApiId`),
    UNIQUE INDEX `SingleEmailList_creditChangeId_key`(`creditChangeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulkEmailList` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `totalRow` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `valid` INTEGER NOT NULL DEFAULT 0,
    `invalid` INTEGER NOT NULL DEFAULT 0,
    `inProgress` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `creditChangeId` VARCHAR(191) NULL,

    UNIQUE INDEX `BulkEmailList_creditChangeId_key`(`creditChangeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulkEmailListItem` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `isEmail` BOOLEAN NOT NULL,
    `order` INTEGER NOT NULL,
    `icypeasApiRequestId` VARCHAR(191) NULL,
    `trueinboxApiRequestId` VARCHAR(191) NULL,
    `enrowApiRequestId` VARCHAR(191) NULL,
    `bouncebanApiRequestId` VARCHAR(191) NULL,
    `icypeasStatus` VARCHAR(191) NULL,
    `trueinboxStatus` VARCHAR(191) NULL,
    `enrowStatus` VARCHAR(191) NULL,
    `bouncebanStatus` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `bulkEmailListId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IcypeasApiRequest` (
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
CREATE TABLE `BouncebanApiRequest` (
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
CREATE TABLE `TrueinboxApiRequest` (
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
CREATE TABLE `EnrowApiRequest` (
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
ALTER TABLE `CheckoutSession` ADD CONSTRAINT `CheckoutSession_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentIntent` ADD CONSTRAINT `PaymentIntent_checkoutSessionId_fkey` FOREIGN KEY (`checkoutSessionId`) REFERENCES `CheckoutSession`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentIntent` ADD CONSTRAINT `PaymentIntent_creditChangeId_fkey` FOREIGN KEY (`creditChangeId`) REFERENCES `CreditChange`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentIntent` ADD CONSTRAINT `PaymentIntent_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreditChange` ADD CONSTRAINT `CreditChange_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VerificationToken` ADD CONSTRAINT `VerificationToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResetPasswordToken` ADD CONSTRAINT `ResetPasswordToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SingleEmailList` ADD CONSTRAINT `SingleEmailList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SingleEmailList` ADD CONSTRAINT `SingleEmailList_creditChangeId_fkey` FOREIGN KEY (`creditChangeId`) REFERENCES `CreditChange`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailList` ADD CONSTRAINT `BulkEmailList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailList` ADD CONSTRAINT `BulkEmailList_creditChangeId_fkey` FOREIGN KEY (`creditChangeId`) REFERENCES `CreditChange`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_icypeasApiRequestId_fkey` FOREIGN KEY (`icypeasApiRequestId`) REFERENCES `IcypeasApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_bouncebanApiRequestId_fkey` FOREIGN KEY (`bouncebanApiRequestId`) REFERENCES `BouncebanApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_trueinboxApiRequestId_fkey` FOREIGN KEY (`trueinboxApiRequestId`) REFERENCES `TrueinboxApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulkEmailListItem` ADD CONSTRAINT `BulkEmailListItem_enrowApiRequestId_fkey` FOREIGN KEY (`enrowApiRequestId`) REFERENCES `EnrowApiRequest`(`requestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IcypeasApiRequest` ADD CONSTRAINT `IcypeasApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BouncebanApiRequest` ADD CONSTRAINT `BouncebanApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrueinboxApiRequest` ADD CONSTRAINT `TrueinboxApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EnrowApiRequest` ADD CONSTRAINT `EnrowApiRequest_bulkEmailListId_fkey` FOREIGN KEY (`bulkEmailListId`) REFERENCES `BulkEmailList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
