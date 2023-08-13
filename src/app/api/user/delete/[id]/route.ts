import prisma from '@/lib/prisma';

// http://localhost:3000/api/user/delete
export async function DELETE({ params }: { params: { id: string } }) {
  const user = await prisma.user.delete({
    where: {
      id: +params.id,
    },
  });
  return new Response(JSON.stringify(user));
}
