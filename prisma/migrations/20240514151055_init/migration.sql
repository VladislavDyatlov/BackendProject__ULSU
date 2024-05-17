-- CreateTable
CREATE TABLE "Converstation" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ids" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ids" TEXT NOT NULL,
    "chatsId" TEXT NOT NULL,
    CONSTRAINT "Chats_chatsId_fkey" FOREIGN KEY ("chatsId") REFERENCES "Converstation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ConverstationToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ConverstationToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Converstation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ConverstationToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConverstationToUsers_AB_unique" ON "_ConverstationToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_ConverstationToUsers_B_index" ON "_ConverstationToUsers"("B");
