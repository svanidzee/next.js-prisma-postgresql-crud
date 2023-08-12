import prisma from '@/lib/prisma';

// http://localhost:3000/api/post/order
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      // sort result based on the likeNum in ascending way
      likeNum: 'asc',
    },
  });

  return new Response(JSON.stringify(posts));
}
