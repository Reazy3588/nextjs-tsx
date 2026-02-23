"use client"
import { selectProduct, selectTotalPrice } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function cart ()  {
    const product = useAppSelector(selectProduct);
    const totalPrice = useAppSelector(selectTotalPrice);
    
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-xl overflow-hidden">

        {/* Empty State */}
        {product.length == 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-4xl mb-5">
              🛒
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Your cart is empty</h2>
            <p className="text-stone-400 text-sm font-light">Add some items to get started!</p>
          </div>
        )}

        {/* Header Stats */}
        {product.length !== 0 && (
          <div className="px-8 pt-8 pb-5 border-b border-stone-100">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">Order Summary</h2>
            <div className="flex gap-3">
              <div className="flex-1 bg-stone-100 rounded-2xl px-4 py-3">
                <span className="block text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Items</span>
                <span className="text-xl font-semibold text-stone-800">{product.length}</span>
              </div>
              <div className="flex-1 bg-stone-100 rounded-2xl px-4 py-3">
                <span className="block text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Total Investment</span>
                <span className="text-xl font-semibold text-stone-800">${totalPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Product List
        {product.length !== 0 && (
          <ul className="divide-y divide-stone-100">
            {product.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between px-8 py-4 hover:bg-stone-50 transition-colors"
              >
                <span className="text-stone-700 text-sm truncate max-w-[65%]">{item.title}</span>
                <span className="bg-stone-100 text-stone-800 text-sm font-semibold px-3 py-1 rounded-full">
                  ${item.price}
                </span>
              </li>
            ))}
          </ul>
        )} */}

        {/* Product List */}
          {product.length !== 0 && (
            <ul className="divide-y divide-stone-100">
              {product.map((item, index) => (
                <li
                  // We use the index here because your item.id contains duplicates
                  key={`cart-item-${item.id}-${index}`}
                  className="flex items-center justify-between px-8 py-4 hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-700 text-sm truncate max-w-[65%]">{item.title}</span>
                  <span className="bg-stone-100 text-stone-800 text-sm font-semibold px-3 py-1 rounded-full">
                    ${item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
}