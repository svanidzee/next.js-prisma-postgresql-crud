import prisma from '@/lib/prisma';

interface Body {
  name: string;
  email: string;
}

// data from body
// export async function POST(req: Request) {
//   const body: Body = await req.json();
//   const user = await prisma.user.create({
//     data: body,
//   });

//   return new Response(JSON.stringify(user));
// }

export async function POST(req: Request) {
  // create single user
  const user = await prisma.user.create({
    data: {
      email: 'User4@gmail.com',
      name: 'User4',
      role: 'USER',
      posts: {
        // create posts
        create: [
          {
            title: 'cdcdcd',
            published: true,
            categories: {
              // connect existing categories to this post:
              connect: [{ id: 1 }, { id: 2 }],

              // if category existed just connect, if not create category
              // connectOrCreate: {
              //   where: {
              //     id: 2,
              //   },
              //   create: {
              //     name: 'Big Data',
              //   },
              // },
            },
          },
        ],
      },
    },
  });

  // create multiple users

  const users = await prisma.user.createMany({
    data: [
      { name: 'User5', email: 'User5@gmail.com' },
      { name: 'User6', email: 'User6@gmail.com' },
      { name: 'User6', email: 'User6@gmail.com' },
    ],
    skipDuplicates: true, // skips existed user
  });

  return new Response(JSON.stringify(user));
}
