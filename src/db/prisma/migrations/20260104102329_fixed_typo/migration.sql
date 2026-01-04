/*
  Warnings:

  - You are about to drop the column `totalQuestion` on the `MockTest` table. All the data in the column will be lost.
  - Added the required column `totalQuestions` to the `MockTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MockTest" DROP COLUMN "totalQuestion",
ADD COLUMN     "totalQuestions" INTEGER NOT NULL;
