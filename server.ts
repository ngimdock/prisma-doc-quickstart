import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "dan",
  //     email: "dan@gmail.com",
  //     posts: {
  //       create: {
  //         title: "Hello World",
  //         content: "This is my first post",
  //       },
  //     },
  //   },
  // });

  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log({ users });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
