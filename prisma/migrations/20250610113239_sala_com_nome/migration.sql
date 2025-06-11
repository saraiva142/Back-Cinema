/*
  Warnings:

  - You are about to drop the column `numero` on the `salas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomeSala]` on the table `salas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomeSala` to the `salas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "salas_numero_key";

-- AlterTable
ALTER TABLE "salas" DROP COLUMN "numero",
ADD COLUMN     "nomeSala" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "salas_nomeSala_key" ON "salas"("nomeSala");
