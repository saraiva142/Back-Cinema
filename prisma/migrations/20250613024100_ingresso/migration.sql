-- CreateTable
CREATE TABLE "ingressos" (
    "id" SERIAL NOT NULL,
    "cliente" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "assento" TEXT NOT NULL,
    "pagamento" TEXT NOT NULL,
    "sessaoId" INTEGER NOT NULL,

    CONSTRAINT "ingressos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
