import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

async function clearList() {
  await prisma.listElement.deleteMany();
}

export { createListElement, getListElements, clearList };
