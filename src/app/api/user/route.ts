import prisma from '@/lib/prisma';

export async function GET() {
  // relation filters: every, some, none
  const users = await prisma.user.findMany({
    where: {
      posts: {
        // users that all their posts is published:
        // every: {
        //   published: true,
        // },

        // users that some of their posts is published:
        // some: {
        //   published: true,
        // },

        // users that none of their posts is unpublished
        none: {
          published: false,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}
