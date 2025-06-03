/*
  Warnings:

  - You are about to drop the `Filme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Filme";

-- CreateTable
CREATE TABLE "filmes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "filmes_titulo_key" ON "filmes"("titulo");
