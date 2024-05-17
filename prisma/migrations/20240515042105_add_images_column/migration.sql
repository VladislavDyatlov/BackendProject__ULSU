/*
  Warnings:

  - Added the required column `images` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "chatsId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chats_chatsId_fkey" FOREIGN KEY ("chatsId") REFERENCES "Converstation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chats" ("chatsId", "date", "id", "message", "name") SELECT "chatsId", "date", "id", "message", "name" FROM "Chats";
DROP TABLE "Chats";
ALTER TABLE "new_Chats" RENAME TO "Chats";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
