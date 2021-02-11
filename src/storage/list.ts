import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

console.log("Inside Prisma...");

async function createListElement(name: string) {
  await prisma.listElement.create({
    data: {
      title: name,
    },
  });
}

async function getListElements(): Promise<string[]> {
  return (
    await prisma.listElement.findMany({
      select: {
        title: true,
      },
    })
  ).map((e) => e.title);
}

export { createListElement, getListElements };
