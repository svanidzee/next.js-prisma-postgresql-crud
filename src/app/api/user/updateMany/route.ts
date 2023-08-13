import prisma from '@/lib/prisma';

// http://localhost:3000/api/user/updateMany
export async function PUT() {
  const udatedUsers = await prisma.user.updateMany({
    where: {
      name: {
        contains: 'eee',
      },
    },

    // update user's name
    data: {
      role: 'ADMIN',
    },
  });

  return new Response(JSON.stringify(udatedUsers));
}
