-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "prev" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Curs" ("id", "prev", "text", "title") SELECT "id", "prev", "text", "title" FROM "Curs";
DROP TABLE "Curs";
ALTER TABLE "new_Curs" RENAME TO "Curs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
