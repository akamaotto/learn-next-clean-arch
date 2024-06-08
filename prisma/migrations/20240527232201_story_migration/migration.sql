-- CreateTable
CREATE TABLE "CompanyAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "industry" TEXT,
    "website" TEXT,
    "linkedInURL" TEXT,
    "companyLogo" TEXT,
    "companySize" TEXT,
    "companyLocation" TEXT,
    "companyDescription" TEXT,

    CONSTRAINT "CompanyAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "highResUrl" TEXT NOT NULL,
    "userId" TEXT,
    "companyAccountId" TEXT,
    "founderGalleryId" TEXT,
    "companyGalleryId" TEXT,
    "founderId" TEXT,
    "storyMediaGalleryId" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FounderGallery" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "founderId" TEXT,

    CONSTRAINT "FounderGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyGallery" (
    "id" TEXT NOT NULL,
    "companyAccountId" TEXT NOT NULL,

    CONSTRAINT "CompanyGallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Founder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "companyAccountId" TEXT NOT NULL,
    "profession" TEXT,
    "position" TEXT,
    "bio" TEXT,
    "linkedInURL" TEXT,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryPromptData" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hook" TEXT,
    "personalThoughts" TEXT,
    "location" TEXT,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "StoryPromptData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "description" TEXT,
    "quote" TEXT,
    "quotedBy" TEXT,
    "roleOfQuotedBy" TEXT,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PressRelease" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" TEXT,
    "city" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "body" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "PressRelease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pitch" (
    "id" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "previewText" TEXT,
    "body" TEXT NOT NULL,
    "signature" TEXT,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "Pitch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PitchBroadcast" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recipients" TEXT[],
    "pitchId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "PitchBroadcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryMediaGallery" (
    "id" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "StoryMediaGallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAccount_companyName_key" ON "CompanyAccount"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Founder_userId_key" ON "Founder"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Founder_companyAccountId_key" ON "Founder"("companyAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "StoryPromptData_storyId_key" ON "StoryPromptData"("storyId");

-- CreateIndex
CREATE UNIQUE INDEX "PressRelease_storyId_key" ON "PressRelease"("storyId");

-- CreateIndex
CREATE UNIQUE INDEX "Pitch_storyId_key" ON "Pitch"("storyId");

-- CreateIndex
CREATE UNIQUE INDEX "StoryMediaGallery_storyId_key" ON "StoryMediaGallery"("storyId");

-- AddForeignKey
ALTER TABLE "CompanyAccount" ADD CONSTRAINT "CompanyAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_companyAccountId_fkey" FOREIGN KEY ("companyAccountId") REFERENCES "CompanyAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_founderGalleryId_fkey" FOREIGN KEY ("founderGalleryId") REFERENCES "FounderGallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_companyGalleryId_fkey" FOREIGN KEY ("companyGalleryId") REFERENCES "CompanyGallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Founder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_storyMediaGalleryId_fkey" FOREIGN KEY ("storyMediaGalleryId") REFERENCES "StoryMediaGallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FounderGallery" ADD CONSTRAINT "FounderGallery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FounderGallery" ADD CONSTRAINT "FounderGallery_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Founder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyGallery" ADD CONSTRAINT "CompanyGallery_companyAccountId_fkey" FOREIGN KEY ("companyAccountId") REFERENCES "CompanyAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_companyAccountId_fkey" FOREIGN KEY ("companyAccountId") REFERENCES "CompanyAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "CompanyAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryPromptData" ADD CONSTRAINT "StoryPromptData_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PressRelease" ADD CONSTRAINT "PressRelease_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pitch" ADD CONSTRAINT "Pitch_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PitchBroadcast" ADD CONSTRAINT "PitchBroadcast_pitchId_fkey" FOREIGN KEY ("pitchId") REFERENCES "Pitch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PitchBroadcast" ADD CONSTRAINT "PitchBroadcast_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryMediaGallery" ADD CONSTRAINT "StoryMediaGallery_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
