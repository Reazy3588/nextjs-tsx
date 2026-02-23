export type ProductType = {
      id: number,
      title: string,
      category:string,
      description: string,
      price: string,
      images: string, 
};

export type cartProductType = {
    id:number;
    title: string;
    image: string;
    price: number;
    onClick?: () => void;
};