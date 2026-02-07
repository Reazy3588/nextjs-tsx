import CardProductDetail from '@/app/components/card/CardProductDetail';
import React, { use } from 'react'; // use is for unwrapping promises in server components

type PropsParams = {
  params: Promise<{ id: string }>; // params is a Promise
  searchParams: any;
};

const ENDPOINT = 'https://fakestoreapi.com/products/';

export const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
};

export default async function Detail({ params }: PropsParams) {
  const { id: idStr } = await params; 
  const id = parseInt(idStr);
  const data = await getData(id);

  // console.log(data);

  return (
    <div className="h-screen grid place-content-center text-white">
      <CardProductDetail 
      title={data?.title || "No Title" }
      description={data?.description || "No description"} 
      image={data?.image || "data:image/png;base64,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"}/>
    </div>
  );
}
