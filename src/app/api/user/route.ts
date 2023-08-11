import prisma from '@/lib/prisma';

export async function GET() {
  // relation filters: every, some, none
  // One-to-Many
  // Many-To-Many
  const users = await prisma.user.findMany({
    // users that all theit posts published
    where: {
      posts: {
        every: {
          published: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}
