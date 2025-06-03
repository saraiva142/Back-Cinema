/*
  Warnings:

  - Added the required column `classificacao` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duracao` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estreia` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filmes" ADD COLUMN     "classificacao" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "duracao" INTEGER NOT NULL,
ADD COLUMN     "estreia" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL;
