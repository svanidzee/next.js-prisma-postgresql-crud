import prisma from '@/lib/prisma';

// http://localhost:3000/api/post/aggregation
export async function GET() {
  const aggregations = await prisma.post.aggregate({
    // aggregation functions
    _sum: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
    _count: {
      likeNum: true,
    },
    _max: {
      likeNum: true,
    },
    _min: {
      likeNum: true,
    },
  });

  return new Response(JSON.stringify(aggregations));
}

// npx prisma db pull
// npx prisma db seed
// npx prisma migrate dev --name iii
// npx prisma studio
