import prisma from '@/lib/prisma';

// http://localhost:3000/api/post/group
export async function GET() {
  const groupPosts = await prisma.post.groupBy({
    // group posts based on authorId filed
    by: ['authorId'],

    // aggregation functions to calculate each group
    _sum: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
  });

  return new Response(JSON.stringify(groupPosts));
}
