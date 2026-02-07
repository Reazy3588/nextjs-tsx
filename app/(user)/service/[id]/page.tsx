// app/(user)/service/[id]/page.tsx

import CardProductDetail from '@/app/components/card/CardProductDetail';

type PropsParams = {
  params: Promise<{ id: string }>; // Next.js provides params as a Promise
  searchParams: any;
};

const ENDPOINT = 'https://fakestoreapi.com/products/';

// Safe fetch function
export const getData = async (id: number) => {
  try {
    const res = await fetch(`${ENDPOINT}${id}`, { cache: 'no-store' });

    if (!res.ok) {
      const text = await res.text();
      console.error('API ERROR:', text);
      throw new Error('Failed to fetch product');
    }

    return await res.json();
  } catch (err) {
    console.error('Fetch failed:', err);
    throw new Error('Unable to fetch product data');
  }
};

// Server component page
export default async function Detail({ params }: PropsParams) {
  // 1️⃣ unwrap the params Promise
  const resolvedParams = await params;

  // 2️⃣ parse ID safely
  const id = Number(resolvedParams.id);
  if (isNaN(id)) {
    throw new Error('Invalid product ID');
  }

  // 3️⃣ fetch product data safely
  const data = await getData(id);

  // 4️⃣ render
  return (
    <div className="h-screen grid place-content-center text-white">
      <CardProductDetail
        title={data?.title || 'No Title'}
        description={data?.description || 'No description'}
        image={data?.image || ''}
      />
    </div>
  );
}
