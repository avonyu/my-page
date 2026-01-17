/*
  Warnings:

  - You are about to drop the `TodoSubstep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TodoSubstep" DROP CONSTRAINT "TodoSubstep_todoItemId_fkey";

-- AlterTable
ALTER TABLE "todoSet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "TodoSubstep";

-- CreateTable
CREATE TABLE "todoSubstep" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "isFinish" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "todoItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "todoSubstep_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "todoSubstep" ADD CONSTRAINT "todoSubstep_todoItemId_fkey" FOREIGN KEY ("todoItemId") REFERENCES "todoItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todoSubstep" ADD CONSTRAINT "todoSubstep_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
