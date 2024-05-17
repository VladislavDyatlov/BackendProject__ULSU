-- CreateTable
CREATE TABLE "Youtube" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "youtube" TEXT NOT NULL,
    "youtubeId" TEXT NOT NULL,
    CONSTRAINT "Youtube_youtubeId_fkey" FOREIGN KEY ("youtubeId") REFERENCES "Curs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
