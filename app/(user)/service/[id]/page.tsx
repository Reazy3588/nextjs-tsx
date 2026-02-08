// app/(user)/service/[id]/page.tsx

import CardProductDetail from '@/app/components/card/CardProductDetail';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>; 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};


const ENDPOINT = 'https://dummyjson.com/products/';

// --- get data --- //
export const getData = async (id: string) => {
  try {
    const res = await fetch(`${ENDPOINT}${id}`, { 
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) return null; // Safety check
    return await res.json();
  } catch (err) {
    console.error('Fetch failed:', err);
    return null;
  }
};
// ---  End get data --- //


// --- Dynamic Metadata --- //
export async function generateMetadata(
  { params }: Props,  
  parent: ResolvingMetadata
): Promise<Metadata> {
  // 1. Get the ID from params
  const id = (await params).id;
 
  // 2. Fetch the product specifically for metadata
  const product = await getData(id);
 
  // 3. Return the metadata using the product data
  return {
    title: product ? `${product.title} | My Store` : 'Product Not Found',
    description: product?.description || 'View our product details.',
    openGraph: {
        images: [product?.thumbnail || ''],
    },
  }
}
// --- End Dynamic Metadata --- //

export default async function Detail({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const data = await getData(id);

  return (
    <div className="h-screen grid place-content-center text-white">
      <CardProductDetail
        title={data.title || 'No Title'}
        description={data.description || 'No description'}
        image={data.thumbnail || (data.images && data.images[0]) || ''}
      />
    </div>
  );
}