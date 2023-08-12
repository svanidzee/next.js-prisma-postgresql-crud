import prisma from '@/lib/prisma';

// http://localhost:3000/api/post/pagination
export async function GET(req: Request) {
  // offset paggination
  const { searchParams } = new URL(req.url);

  const pgnum = +(searchParams.get('pgnum') ?? 0);
  const pgsize = +(searchParams.get('pgsize') ?? 5);

  const posts = await prisma.post.findMany({
    skip: pgnum * pgsize,
    take: pgsize,
  });

  return new Response(JSON.stringify(posts));
}
