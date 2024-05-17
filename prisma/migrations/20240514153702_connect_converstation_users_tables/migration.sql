/*
  Warnings:

  - You are about to drop the `_ConverstationToUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `ids` on the `Users` table. All the data in the column will be lost.
  - Added the required column `idCoonver` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idsUser` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ConverstationToUsers_B_index";

-- DropIndex
DROP INDEX "_ConverstationToUsers_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ConverstationToUsers";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idsUser" TEXT NOT NULL,
    "idCoonver" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    CONSTRAINT "Users_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Converstation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("id") SELECT "id" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
