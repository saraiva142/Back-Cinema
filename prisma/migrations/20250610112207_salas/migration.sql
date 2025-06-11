-- CreateTable
CREATE TABLE "salas" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salas_numero_key" ON "salas"("numero");
