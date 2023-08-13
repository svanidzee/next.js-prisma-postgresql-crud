import prisma from '@/lib/prisma';

// http://localhost:3000/api/post/transaction
export async function POST() {
  const createDuplicateUser = prisma.user.create({
    data: {
      name: 'duplicated',
      email: 'User6@gmail.com',
    },
  });

  const depositUpdate = prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      likeNum: {
        increment: 5,
      },
    },
  });

  const result = await prisma.$transaction([depositUpdate, createDuplicateUser]);

  return new Response(JSON.stringify(result));
}
