// "use client";

// import { ProductType } from '@/lib/definitions';
// import React, { useEffect, useState } from 'react';
// import DataTable, { TableColumn } from 'react-data-table-component';
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
// // Import Next.js Image component
// import Image from 'next/image';

// export default function Page() {      
//     const [products, setProducts] = useState<ProductType[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [openModal, setOpenModal] = useState(false);
//     const [productDetail, setProductDetail] = useState<ProductType | null>(null);

//     // Placeholder image if the product has no image
//     const imagePlaceholder = "https://via.placeholder.com/250x300?text=No+Image";

//     useEffect(() => {
//         setLoading(true);
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data.products || []); 
//                 setLoading(false);
//             })
//             .catch(err => { 
//                 console.error(err);
//                 setLoading(false);
//             });
//     }, []);

//     const handleViewProduct = (product: ProductType) => {
//         setProductDetail(product);
//         setOpenModal(true);
//     }

//     const columns: TableColumn<ProductType>[] = [
//         {
//             name: 'Product Title',
//             selector: (row) => row.title,
//             sortable: true,
//             width: '300px',
//         },
//         {
//             name: 'Price',
//             selector: (row) => `$${row.price}`,
//             sortable: true,
//         },
//         {
//             name: "Category",
//             selector: (row) => row.category,
//             sortable: true,
//         },
//         {
//             name: "Preview",
//             cell: (row) => (
//                 <div className="flex items-center justify-center">
//                     <img 
//                         src={row.images[0]} 
//                         alt={row.title}
//                         className="h-10 w-10 object-cover rounded-full border border-gray-200 shadow-sm" 
//                     />
//                 </div>
//             ),
//         },
//         {
//             name: "Action",
//             cell: (row) => (
//                 <div className="flex items-center justify-center gap-2 font-medium">
//                     <button onClick={() => handleViewProduct(row)} className='text-blue-600 hover:underline'>View</button>
//                     <button className='text-yellow-600 hover:underline'>Edit</button>
//                     <button className='text-red-600 hover:underline'>Delete</button>
//                 </div>
//             ),
//         }
//     ];

//     return (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
//                 <h1 className="text-2xl font-bold mb-6 text-gray-800">Product Inventory</h1>
                
//                 <DataTable  
//                     fixedHeader
//                     progressPending={loading} 
//                     columns={columns} 
//                     data={products} 
//                     pagination 
//                     customStyles={customStyles}
//                     highlightOnHover
//                 />

//                <Modal show={openModal} onClose={() => setOpenModal(false)} size="2xl">
//   {/* Header with a subtle gradient line */}
//   <ModalHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 rounded-t-lg relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
//     <div className="flex flex-col relative z-10">
//         <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//             Premium Selection
//         </span>
//         <span className="text-white font-semibold text-lg">Product Overview</span>
//     </div>
//   </ModalHeader>
  
//   <ModalBody className="bg-slate-900 p-0 overflow-hidden">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      
//       {/* Left Side: Product Showcase */}
//       <div className="relative group flex items-center justify-center p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
//         {/* Animated Background Glow */}
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-[100px] rounded-full scale-50 group-hover:scale-150 transition-transform duration-1000 ease-out" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        
//         <Image
//           src={productDetail?.images?.[0] || imagePlaceholder}
//           alt={productDetail?.title || "Untitled"}
//           width={400}
//           height={400}
//           className="relative z-10 object-contain drop-shadow-[0_25px_60px_rgba(6,182,212,0.4)] transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_30px_80px_rgba(6,182,212,0.6)]"/>
//       </div>
//       {/* Right Side: Details */}
//       <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
//         <div className="relative z-10">
//           <div className="flex justify-between items-start mb-2">
//           </div>
//           <h2 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-none mb-4 tracking-tight">
//             {productDetail?.title}
//           </h2>
          
//           <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 rounded-full shadow-lg shadow-cyan-500/50" /> {/* Accent line */}
          
//           <p className="text-slate-600 text-sm leading-relaxed mb-6">
//             {productDetail?.description}
//           </p>

//           <div className="flex items-center gap-4">
//              <div className="flex flex-col bg-gradient-to-br from-cyan-50 to-blue-50 px-5 py-4 rounded-xl border border-cyan-200/50 shadow-sm">
//                 <span className="text-[10px] text-cyan-600 uppercase font-bold tracking-wider">Current Price</span>
//                 <span className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">${productDetail?.price}</span>
//              </div>
//              {/* Stock Status */}
//              <div className="ml-auto text-right flex items-center gap-2 bg-green-50 px-4 py-3 rounded-xl border border-green-200/50">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
//                 <div>
//                   <span className="block text-[10px] text-green-700 uppercase font-bold tracking-wider">Availability</span>
//                   <span className="block text-xs text-green-600 font-semibold">In Stock</span>
//                 </div>
//              </div>
//           </div>
//         </div>

//         <div className="mt-8 flex gap-2 relative z-10">
//             <button 
//                 onClick={() => setOpenModal(false)}
//                 className="flex-[2] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:from-cyan-600 hover:via-cyan-500 hover:to-blue-600 hover:shadow-[0_15px_30px_rgba(8,145,178,0.4)] transition-all duration-300 active:scale-95 border border-slate-700 hover:border-cyan-400">
//                 Back
//             </button>
//         </div>
//       </div>
//     </div>
//   </ModalBody>
// </Modal>
//             </div>
//         </div>
//     );
// }

// const customStyles = {
//     headCells: {
//         style: {
//             fontWeight: 'bold',
//             fontSize: '1.1rem',
//             backgroundColor: '#f9fafb',
//             color: '#374151',
//         },
//     },
//     rows: {
//         style: {
//             minHeight: '72px',
//         },
//     },
// };










"use client";

import { ProductType } from '@/lib/definitions';
import React, { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import Image from 'next/image';

export default function Page() {      
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [productDetail, setProductDetail] = useState<ProductType | null>(null);
    const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
    const [deletingProduct, setDeletingProduct] = useState<ProductType | null>(null);

    const imagePlaceholder = "https://via.placeholder.com/250x300?text=No+Image";

    useEffect(() => {
        setLoading(true);
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products || []); 
                setLoading(false);
            })
            .catch(err => { 
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleViewProduct = (product: ProductType) => {
        setProductDetail(product);
        setOpenModal(true);
    }

    const handleEditProduct = (product: ProductType) => {
        setEditingProduct({...product});
        setOpenEditModal(true);
    }

    const handleDeleteProduct = (product: ProductType) => {
        setDeletingProduct(product);
        setOpenDeleteModal(true);
    }

    const confirmDelete = () => {
        if (deletingProduct) {
            // Remove product from state
            setProducts(products.filter(p => p.id !== deletingProduct.id));
            setOpenDeleteModal(false);
            setDeletingProduct(null);
            
            // Here you would also make an API call to delete from the server
            // fetch(`https://dummyjson.com/products/${deletingProduct.id}`, {
            //     method: 'DELETE',
            // })
        }
    }

    const saveEdit = () => {
        if (editingProduct) {
            // Update product in state
            setProducts(products.map(p => 
                p.id === editingProduct.id ? editingProduct : p
            ));
            setOpenEditModal(false);
            setEditingProduct(null);
            
            // Here you would also make an API call to update on the server
            // fetch(`https://dummyjson.com/products/${editingProduct.id}`, {
            //     method: 'PUT',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(editingProduct)
            // })
        }
    }

    const handleInputChange = (field: keyof ProductType, value: string | number) => {
        if (editingProduct) {
            setEditingProduct({
                ...editingProduct,
                [field]: value
            });
        }
    }

    const columns: TableColumn<ProductType>[] = [
        {
            name: 'Product Title',
            selector: (row) => row.title,
            sortable: true,
            width: '300px',
        },
        {
            name: 'Price',
            selector: (row) => `$${row.price}`,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: "Preview",
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <img 
                        src={row.images[0]} 
                        alt={row.title}
                        className="h-10 w-10 object-cover rounded-full border border-gray-200 shadow-sm" 
                    />
                </div>
            ),
        },
        {
            name: "Action",
            cell: (row) => (
             <div className="flex items-center justify-center gap-2">
    <button 
        onClick={() => handleViewProduct(row)} 
        className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
    >
        View
    </button>
    <button 
        onClick={() => handleEditProduct(row)} 
        className="px-3 py-1.5 text-xs font-semibold text-yellow-600 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
    >
        Edit
    </button>
    <button 
        onClick={() => handleDeleteProduct(row)} 
        className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
    >
        Delete
    </button>
</div>
            ),
        }
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Product Inventory</h1>
                
                <DataTable  
                    fixedHeader
                    progressPending={loading} 
                    columns={columns} 
                    data={products} 
                    pagination 
                    customStyles={customStyles}
                    highlightOnHover
                />

                {/* VIEW MODAL */}
                <Modal show={openModal} onClose={() => setOpenModal(false)} size="2xl">
                    <ModalHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
                        <div className="flex flex-col relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Premium Selection
                            </span>
                            <span className="text-white font-semibold text-lg">Product Overview</span>
                        </div>
                    </ModalHeader>
                    
                    <ModalBody className="bg-slate-900 p-0 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="relative group flex items-center justify-center p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-[100px] rounded-full scale-50 group-hover:scale-150 transition-transform duration-1000 ease-out" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
                                
                                <Image
                                    src={productDetail?.images?.[0] || imagePlaceholder}
                                    alt={productDetail?.title || "Untitled"}
                                    width={400}
                                    height={400}
                                    className="relative z-10 object-contain drop-shadow-[0_25px_60px_rgba(6,182,212,0.4)] transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_30px_80px_rgba(6,182,212,0.6)]"
                                />
                            </div>
                            
                            <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-none mb-4 tracking-tight">
                                        {productDetail?.title}
                                    </h2>
                                    
                                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 rounded-full shadow-lg shadow-cyan-500/50" />
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {productDetail?.description}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col bg-gradient-to-br from-cyan-50 to-blue-50 px-5 py-4 rounded-xl border border-cyan-200/50 shadow-sm">
                                            <span className="text-[10px] text-cyan-600 uppercase font-bold tracking-wider">Current Price</span>
                                            <span className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">${productDetail?.price}</span>
                                        </div>
                                        
                                        <div className="ml-auto text-right flex items-center gap-2 bg-green-50 px-4 py-3 rounded-xl border border-green-200/50">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                                            <div>
                                                <span className="block text-[10px] text-green-700 uppercase font-bold tracking-wider">Availability</span>
                                                <span className="block text-xs text-green-600 font-semibold">In Stock</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-2 relative z-10">
                                    <button 
                                        onClick={() => setOpenModal(false)}
                                        className="flex-[2] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:from-cyan-600 hover:via-cyan-500 hover:to-blue-600 hover:shadow-[0_15px_30px_rgba(8,145,178,0.4)] transition-all duration-300 active:scale-95 border border-slate-700 hover:border-cyan-400">
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                {/* EDIT MODAL */}
                <Modal show={openEditModal} onClose={() => setOpenEditModal(false)} size="2xl">
                    <ModalHeader className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 border-b border-yellow-400/20 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-yellow-500/5" />
                        <div className="flex flex-col relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-100">
                                Product Management
                            </span>
                            <span className="text-white font-semibold text-lg">Edit Product</span>
                        </div>
                    </ModalHeader>
                    
                    <ModalBody className="bg-white p-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Product Title</label>
                                <input
                                    type="text"
                                    value={editingProduct?.title || ''}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={editingProduct?.description || ''}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Price ($)</label>
                                    <input
                                        type="number"
                                        value={editingProduct?.price || 0}
                                        onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.category || ''}
                                        onChange={(e) => handleInputChange('category', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <img 
                                    src={editingProduct?.images?.[0] || imagePlaceholder} 
                                    alt={editingProduct?.title || ''}
                                    className="h-20 w-20 object-cover rounded-lg border border-yellow-300"
                                />
                            <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.images?.[0] || ''}
                                    onChange={(e) => {
                                            if (editingProduct) {
                                                const updatedProduct = Object.assign({}, editingProduct, {
                                                    images: [e.target.value]
                                                });
                                                setEditingProduct(updatedProduct);
                                            }
                                        }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                                    />
                            </div>
                            </div>
                        </div>
                    </ModalBody>
                    
                    <ModalFooter className="bg-gray-50 border-t">
                        <div className="flex gap-3 w-full">
                            <button
                                onClick={() => setOpenEditModal(false)}
                                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveEdit}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-500 text-white rounded-lg font-bold hover:from-yellow-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Save Changes
                            </button>
                        </div>
                    </ModalFooter>
                </Modal>

                {/* DELETE CONFIRMATION MODAL */}
                <Modal show={openDeleteModal} onClose={() => setOpenDeleteModal(false)} size="md">
                    <ModalHeader className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 border-b border-red-400/20 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-rose-500/5 to-red-500/5" />
                        <div className="flex flex-col relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-100">
                                Warning
                            </span>
                            <span className="text-white font-semibold text-lg">Delete Product</span>
                        </div>
                    </ModalHeader>
                    
                    <ModalBody className="bg-white p-8">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Are you sure?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Do you really want to delete <span className="font-bold text-gray-900">"{deletingProduct?.title}"</span>? This action cannot be undone.
                            </p>
                        </div>
                    </ModalBody>
                    
                    <ModalFooter className="bg-gray-50 border-t">
                        <div className="flex gap-3 w-full">
                            <button
                                onClick={() => setOpenDeleteModal(false)}
                                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white rounded-lg font-bold hover:from-red-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Delete Product
                            </button>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}

const customStyles = {
    headCells: {
        style: {
            fontWeight: 'bold',
            fontSize: '1.1rem',
            backgroundColor: '#f9fafb',
            color: '#374151',
        },
        handleInputChange: {
            color: '#000000',
        },

    },
    rows: {
        style: {
            minHeight: '72px',
        },
    },
};