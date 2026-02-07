

type PropsType = {
    title: string;
    image: string;
    price: string;
    onClick: () => void;
}

export default function CardProduct ({title, image, price, onClick}: PropsType) {

  return (
        
     <div className="group relative flex w-full flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 h-[520px] w-80">
  {/* IMAGE SECTION - Inset with background tint */}
  <div className="relative h-64 w-full overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-gray-800">
    <img
      onClick={onClick}
      src={image}
      alt={title}
      className=" cursor-pointer h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110" 
    />
  </div>
  {/* CONTENT SECTION */}
  <div className="flex flex-1 flex-col px-4 py-6">
    <div className="flex-1">
      <div className="flex items-center justify-between">
         <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-600">Electronics</span>
         <div className="flex items-center">
            <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span className="ml-1 text-[11px] font-bold text-gray-500">4.0</span>
         </div>
      </div>

      <h5 className="mt-3 line-clamp-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
        {title}
      </h5>
    </div>

    {/* PRICE & ACTION */}
    <div className="mt-auto flex items-end justify-between">
      <div className="flex flex-col">
        <span className="text-3xl font-black text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>
        <button  onClick={onClick} className=" cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-cyan-600 px-8 font-bold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] active:scale-95">
          <span className="relative z-10">View Card</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>
    </div>
  </div>
</div>
    );
}
