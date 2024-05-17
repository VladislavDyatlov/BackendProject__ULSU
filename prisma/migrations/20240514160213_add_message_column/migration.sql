/*
  Warnings:

  - You are about to drop the column `ids` on the `Chats` table. All the data in the column will be lost.
  - Added the required column `message` to the `Chats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "chatsId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chats_chatsId_fkey" FOREIGN KEY ("chatsId") REFERENCES "Converstation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chats" ("chatsId", "id") SELECT "chatsId", "id" FROM "Chats";
DROP TABLE "Chats";
ALTER TABLE "new_Chats" RENAME TO "Chats";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
