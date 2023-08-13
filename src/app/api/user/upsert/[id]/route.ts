import prisma from '@/lib/prisma';

interface Body {
  name: string;
}

// http://localhost:3000/api/user/upsert
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body: Body = await request.json();

  const updatedUser = await prisma.user.upsert({
    where: {
      id: +params.id,
    },

    // if user exist - update
    update: {
      name: 'useExists',
    },
    // if not - create
    create: {
      name: 'User6',
      email: 'User6@gmail.com',
    },
  });
  return new Response(JSON.stringify(updatedUser));
}
