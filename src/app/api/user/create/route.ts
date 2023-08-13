import prisma from '@/lib/prisma';

// http://localhost:3000/api/user/create
export async function POST() {
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
  return new Response(JSON.stringify(user));
}
