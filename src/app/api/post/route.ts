import prisma from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    // filtering
    // where: {
    //   author: {
    //     // is: {
    //     //   name: 'User1',
    //     // },
    //     isNot: {
    //       name: 'User1',
    //     },
    //     is: {
    //       email: {
    //         startsWith: 'User2',
    //       },
    //     },
    //   },
    // },

    // selecting specific field
    select: {
      title: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(posts));
}
