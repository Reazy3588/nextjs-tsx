// app/(user)/service/[id]/page.tsx

import CardProductDetail from '@/app/components/card/CardProductDetail';

type PropsParams = {
  params: Promise<{ id: string }>;
  searchParams: any;
};

// Switching to DummyJSON for better stability on Vercel
const ENDPOINT = 'https://dummyjson.com/products/';

// Safe fetch function
export const getData = async (id: number) => {
  try {
    // Note: DummyJSON doesn't block Vercel like FakeStoreAPI does
    const res = await fetch(`${ENDPOINT}${id}`, { 
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
      // If it still fails, this will help you see why in Vercel Logs
      const text = await res.text();
      console.error(`API ERROR (${res.status}):`, text.substring(0, 100)); 
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error('Fetch failed:', err);
    throw new Error('Unable to fetch product data at this time');
  }
};

export default async function Detail({ params }: PropsParams) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  if (isNaN(id)) {
    return <div className="h-screen grid place-content-center">Invalid product ID</div>;
  }

  const data = await getData(id);

  return (
    <div className="h-screen grid place-content-center text-white">
      <CardProductDetail
        title={data?.title || 'No Title'}
        description={data?.description || 'No description'}
        // DummyJSON uses .images (array) or .thumbnail. 
        // We use || to stay compatible with both APIs.
        image={data?.image || data?.thumbnail || (data?.images?.[0]) || ''}
      />
    </div>
  );
};