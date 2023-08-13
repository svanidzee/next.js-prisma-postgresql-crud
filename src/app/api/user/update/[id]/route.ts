import prisma from '@/lib/prisma';

// http://localhost:3000/api/user/update
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const udatedUser = await prisma.user.update({
    where: {
      id: +params.id,
    },

    // update user's name
    data: {
      name: 'updatedUser4',
    },
  });

  return new Response(JSON.stringify(udatedUser));
}
