
import { Card } from "flowbite-react";

type PropsType = {
    title: string;
    image: string;
    // rating: string;
    description: string;

}

export default function CardProductDetail ({title, image, description}: PropsType) {
  return (
 <Card
  // h-full and flex-col are key for uniform sizing
  className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border-none bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 dark:bg-slate-900"
>
  <div className="relative aspect-square w-full overflow-hidden bg-slate-50 p-6 dark:bg-slate-800/50">
    <img
      src={image}
      className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
  <div className="flex flex-1 flex-col justify-between p-5">
    <div>
      <h5 className="line-clamp-2 h-14 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h5>
      
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  </div>
</Card>
  );
}
