-- CreateTable
CREATE TABLE "Curs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "prev" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "correct" INTEGER NOT NULL,
    "questionId" TEXT NOT NULL,
    CONSTRAINT "Question_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Curs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Know" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "know" TEXT NOT NULL,
    "knowId" TEXT NOT NULL,
    CONSTRAINT "Know_knowId_fkey" FOREIGN KEY ("knowId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
