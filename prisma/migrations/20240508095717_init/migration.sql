/*
  Warnings:

  - Added the required column `curs` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "images" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "curs" TEXT NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_Comment" ("comment", "id", "images", "name") SELECT "comment", "id", "images", "name" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
