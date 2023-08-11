import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'User1',
    email: 'Useer1@gmail.com',
    posts: {
      create: [
        {
          title: 'Test1',
          published: true,
          categories: {
            create: [
              {
                name: 'Data1111',
              },
              {
                name: 'Data2222',
              },
            ],
          },
        },
        {
          title: 'Test2',
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: 'User2',
    email: 'User2@gmail.com',
    posts: {
      create: [
        {
          title: 'Test3',
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: 'User3',
    email: 'User3@prisma.io',
    posts: {
      create: [
        {
          title: 'Test4',

          published: true,
          categories: {
            connect: [
              {
                id: 2,
              },
            ],
          },
        },
        {
          title: 'Test5',
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
