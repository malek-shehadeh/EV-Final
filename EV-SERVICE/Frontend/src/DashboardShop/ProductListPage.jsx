// import React, { useState } from "react";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Brake Pad",
//       description: "High-quality brake pads",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Oil Filter",
//       description: "Efficient oil filter",
//       image: "/api/placeholder/100/100",
//     },
//   ]);

//   const handleDelete = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleUpdate = (id) => {
//     // Implement update logic here
//     console.log("Update product with id:", id);
//   };

//   return (
//     <div className="space-y-4">
//       {products.map((product) => (
//         <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-24 h-24 object-cover mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-sm text-gray-500">{product.description}</p>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-end space-x-2">
//             <button
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleUpdate(product.id)}
//             >
//               Update
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleDelete(product.id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductListPage;
// /////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`);
//       setProducts(products.filter((product) => product._id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const handleUpdate = (id) => {
//     // Implement update logic here, such as navigating to an edit page
//     console.log("Update product with id:", id);
//   };

//   return (
//     <div className="space-y-4">
//       {products.map((product) => (
//         <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <img
//               src={product.images[0] || "/api/placeholder/100/100"}
//               alt={product.name}
//               className="w-24 h-24 object-cover mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-sm text-gray-500">{product.description}</p>
//               <p className="text-sm text-gray-700">Price: ${product.price}</p>
//               <p className="text-sm text-gray-700">
//                 Category: {product.category}
//               </p>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-end space-x-2">
//             <button
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleUpdate(product._id)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleDelete(product._id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductListPage;
// ///work not edit///
// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct(product);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Transition appear show={isEditModalOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>

//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Edit Product
//                 </Dialog.Title>
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//                 <form onSubmit={handleEditSubmit} className="mt-4">
//                   <div className="mb-4">
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={editingProduct?.name || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           name: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="description"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       value={editingProduct?.description || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           description: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     ></textarea>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="price"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Price
//                     </label>
//                     <input
//                       type="number"
//                       id="price"
//                       value={editingProduct?.price || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           price: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="category"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Category
//                     </label>
//                     <input
//                       type="text"
//                       id="category"
//                       value={editingProduct?.category || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           category: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ProductListPage;
// ///////////////////////////////////////////
// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Dialog, Transition } from "@headlessui/react";
// import { XCircleIcon } from "@heroicons/react/24/outline";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct(product);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Transition appear show={isEditModalOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>

//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Edit Product
//                 </Dialog.Title>
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   <XCircleIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//                 <form onSubmit={handleEditSubmit} className="mt-4">
//                   <div className="mb-4">
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={editingProduct?.name || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           name: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="description"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       value={editingProduct?.description || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           description: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     ></textarea>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="price"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Price
//                     </label>
//                     <input
//                       type="number"
//                       id="price"
//                       value={editingProduct?.price || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           price: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="category"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Category
//                     </label>
//                     <input
//                       type="text"
//                       id="category"
//                       value={editingProduct?.category || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           category: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ProductListPage;
// ////////////////////////////////////////////////
// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Dialog, Transition } from "@headlessui/react";
// import { FaTimesCircle } from "react-icons/fa"; // استيراد الأيقونة من react-icons

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct(product);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Transition appear show={isEditModalOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>

//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Edit Product
//                 </Dialog.Title>
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//                 </button>
//                 <form onSubmit={handleEditSubmit} className="mt-4">
//                   <div className="mb-4">
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={editingProduct?.name || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           name: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="description"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       value={editingProduct?.description || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           description: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     ></textarea>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="price"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Price
//                     </label>
//                     <input
//                       type="number"
//                       id="price"
//                       value={editingProduct?.price || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           price: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="category"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Category
//                     </label>
//                     <input
//                       type="text"
//                       id="category"
//                       value={editingProduct?.category || ""}
//                       onChange={(e) =>
//                         setEditingProduct({
//                           ...editingProduct,
//                           category: e.target.value,
//                         })
//                       }
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mt-4 flex justify-end">
//                     <button
//                       type="submit"
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ProductListPage;
// //////////
// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Dialog, Transition } from "@headlessui/react";
// import { FaTimesCircle } from "react-icons/fa";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     // قم بفتح المودال وتعبئة بيانات المنتج المراد تعديلها
//     setEditingProduct({ ...product });
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       // تحديث المنتج في قائمة المنتجات
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // تحديث حالة المنتج المراد تعديله عند كل إدخال
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* مودال تعديل المنتج */}
//       <Transition appear show={isEditModalOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>

//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Edit Product
//                 </Dialog.Title>
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//                 </button>
//                 <form onSubmit={handleEditSubmit} className="mt-4">
//                   <div className="mb-4">
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={editingProduct?.name || ""}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="description"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       name="description"
//                       value={editingProduct?.description || ""}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     ></textarea>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="price"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Price
//                     </label>
//                     <input
//                       type="number"
//                       id="price"
//                       name="price"
//                       value={editingProduct?.price || ""}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="category"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Category
//                     </label>
//                     <input
//                       type="text"
//                       id="category"
//                       name="category"
//                       value={editingProduct?.category || ""}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     />
//                   </div>
//                   <div className="mt-4 flex justify-end">
//                     <button
//                       type="submit"
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ProductListPage;
// //////////
// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Dialog, Transition } from "@headlessui/react";
// import { FaTimesCircle } from "react-icons/fa";

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [loading, setLoading] = useState(false); // إضافة حالة التحميل

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     // تحقق من أن المنتج ليس فارغًا قبل فتح المودال
//     if (product) {
//       setEditingProduct({ ...product });
//       setIsEditModalOpen(true);
//     }
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // تعيين حالة التحميل
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     } finally {
//       setLoading(false); // إيقاف حالة التحميل بعد المحاولة
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Transition appear show={isEditModalOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
//             </Transition.Child>

//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Edit Product
//                 </Dialog.Title>
//                 <button
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//                   onClick={() => setIsEditModalOpen(false)}
//                 >
//                   <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//                 </button>
//                 {editingProduct ? (
//                   <form onSubmit={handleEditSubmit} className="mt-4">
//                     <div className="mb-4">
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={editingProduct?.name || ""}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="description"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Description
//                       </label>
//                       <textarea
//                         id="description"
//                         name="description"
//                         value={editingProduct?.description || ""}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                       ></textarea>
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="price"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Price
//                       </label>
//                       <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={editingProduct?.price || ""}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="category"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         id="category"
//                         name="category"
//                         value={editingProduct?.category || ""}
//                         onChange={handleInputChange}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                       />
//                     </div>
//                     <div className="mt-4 flex justify-end">
//                       <button
//                         type="submit"
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//                       >
//                         {loading ? "Saving..." : "Save Changes"}
//                       </button>
//                     </div>
//                   </form>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default ProductListPage;
////////////////////////////////////////////////////////////////////
// //////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
// ///////////////////////////////okkkkkkkkkkkkkkkkkkkkkkk//////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   // جلب المنتجات عند تحميل الصفحة
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // وظيفة لجلب المنتجات من API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   // وظيفة لحذف المنتج
//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   // وظيفة لفتح نافذة التعديل عند الضغط على "Edit"
//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setIsEditModalOpen(true); // فتح النافذة
//   };

//   // حفظ التعديلات في قاعدة البيانات
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         editingProduct // تمرير بيانات المنتج المعدلة إلى API
//       );
//       // تحديث المنتج في الواجهة
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false); // إغلاق النافذة بعد حفظ التعديلات
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   // تحديث حالة المنتج عند إدخال التعديلات
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
// //////////////////////////////////////okokokokokokokokokokok/////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null); // حالة لتحميل الصورة الجديدة

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setSelectedImage(null); // إعادة تعيين الصورة عند فتح النافذة
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData(); // استخدام FormData لإرسال البيانات والصورة
//       formData.append("name", editingProduct.name);
//       formData.append("description", editingProduct.description);
//       formData.append("price", editingProduct.price);
//       formData.append("category", editingProduct.category);
//       if (selectedImage) {
//         formData.append("image", selectedImage); // إضافة الصورة إذا كانت موجودة
//       }

//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]); // تحديث حالة الصورة عند تحميل صورة جديدة
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={product.images[0] || "/api/placeholder/400/300"}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="image"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Image
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 onChange={handleImageChange} // عند تحميل الصورة
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
// /////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]); // حالة لتخزين الصور المختارة

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setSelectedImages([]); // إعادة تعيين الصور عند فتح النافذة
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData(); // استخدام FormData لإرسال البيانات والصور
//       formData.append("name", editingProduct.name);
//       formData.append("description", editingProduct.description);
//       formData.append("price", editingProduct.price);
//       formData.append("category", editingProduct.category);

//       // إضافة الصور إذا كانت موجودة
//       selectedImages.forEach((image) => {
//         formData.append("images", image);
//       });

//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setSelectedImages([...e.target.files]); // تحديث حالة الصور عند تحميل صور جديدة
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <div className="flex flex-wrap">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image || "/api/placeholder/400/300"}
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//               ))}
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="images"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Images
//               </label>
//               <input
//                 type="file"
//                 id="images"
//                 name="images"
//                 multiple // السماح بتحميل عدة صور
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//               <div className="mt-4">
//                 {selectedImages.length > 0 && (
//                   <div className="flex flex-wrap gap-4">
//                     {Array.from(selectedImages).map((image, index) => (
//                       <img
//                         key={index}
//                         src={URL.createObjectURL(image)}
//                         alt={`Selected ${index}`}
//                         className="w-32 h-32 object-cover"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
// /////////////work100%///////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);

//   // useEffect(() => {
//   //   fetchProducts();
//   // }, []);

//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:5000/api/products");
//   //     setProducts(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching products:", error);
//   //     Swal.fire("Error", "Failed to fetch products", "error");
//   //   }
//   // };
//   ////////////////

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.get("http://localhost:5000/api/products", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // Handle error (show message to user, etc.)
//     }
//   };

//   ////////////////
//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/${id}`);
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setSelectedImages([]);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", editingProduct.name);
//       formData.append("description", editingProduct.description);
//       formData.append("price", editingProduct.price);
//       formData.append("category", editingProduct.category);

//       selectedImages.forEach((image) => {
//         formData.append("images", image);
//       });

//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setSelectedImages([...e.target.files]);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <div className="flex flex-wrap">
//               {product.images && product.images.length > 0 ? (
//                 product.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={`http://localhost:5000/${image}`}
//                     alt={`${product.name} - Image ${index + 1}`}
//                     className="w-full h-48 object-cover"
//                   />
//                 ))
//               ) : (
//                 <img
//                   src="/api/placeholder/400/300"
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//               )}
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="images"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Images
//               </label>
//               <input
//                 type="file"
//                 id="images"
//                 name="images"
//                 multiple
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//               <div className="mt-4">
//                 {selectedImages.length > 0 && (
//                   <div className="flex flex-wrap gap-4">
//                     {Array.from(selectedImages).map((image, index) => (
//                       <img
//                         key={index}
//                         src={URL.createObjectURL(image)}
//                         alt={`Selected ${index}`}
//                         className="w-32 h-32 object-cover"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
/////////////////////////////////////
///////////////
// /////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Modal from "react-modal";
// import { FaTimesCircle } from "react-icons/fa";

// Modal.setAppElement("#root");

// const ProductListPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.get("http://localhost:5000/api/products", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       Swal.fire("Error", "Failed to fetch products", "error");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         const token = localStorage.getItem("shopOwnerToken");
//         await axios.delete(`http://localhost:5000/api/products/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProducts(products.filter((product) => product._id !== id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         Swal.fire("Error", "Failed to delete the product", "error");
//       }
//     }
//   };

//   const handleUpdate = (product) => {
//     setEditingProduct({ ...product });
//     setSelectedImages([]);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const formData = new FormData();
//       formData.append("name", editingProduct.name);
//       formData.append("description", editingProduct.description);
//       formData.append("price", editingProduct.price);
//       formData.append("category", editingProduct.category);

//       selectedImages.forEach((image) => {
//         formData.append("images", image);
//       });

//       const response = await axios.put(
//         `http://localhost:5000/api/products/${editingProduct._id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setProducts(
//         products.map((p) => (p._id === editingProduct._id ? response.data : p))
//       );
//       setIsEditModalOpen(false);
//       Swal.fire("Updated!", "The product has been updated.", "success");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       Swal.fire("Error", "Failed to update the product", "error");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingProduct({ ...editingProduct, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setSelectedImages([...e.target.files]);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             <div className="flex flex-wrap">
//               {product.images && product.images.length > 0 ? (
//                 product.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={`http://localhost:5000/${image}`}
//                     alt={`${product.name} - Image ${index + 1}`}
//                     className="w-full h-48 object-cover"
//                   />
//                 ))
//               ) : (
//                 <img
//                   src="/api/placeholder/400/300"
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//               )}
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold text-indigo-600 mb-2">
//                 ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Category: {product.category}
//               </p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleUpdate(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="relative p-6 bg-white rounded-lg shadow-xl">
//           <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//           <button
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
//             onClick={() => setIsEditModalOpen(false)}
//           >
//             <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editingProduct?.name || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={editingProduct?.description || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={editingProduct?.price || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={editingProduct?.category || ""}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="images"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Images
//               </label>
//               <input
//                 type="file"
//                 id="images"
//                 name="images"
//                 multiple
//                 onChange={handleImageChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//               <div className="mt-4">
//                 {selectedImages.length > 0 && (
//                   <div className="flex flex-wrap gap-4">
//                     {Array.from(selectedImages).map((image, index) => (
//                       <img
//                         key={index}
//                         src={URL.createObjectURL(image)}
//                         alt={`Selected ${index}`}
//                         className="w-32 h-32 object-cover"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ProductListPage;
//////////////ok top ////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "react-modal";
import {
  FaTimesCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTrash,
} from "react-icons/fa";

Modal.setAppElement("#root");

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Swal.fire("Error", "Failed to fetch products", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("shopOwnerToken");
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(products.filter((product) => product._id !== id));
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire("Error", "Failed to delete the product", "error");
      }
    }
  };

  const handleUpdate = (product) => {
    setEditingProduct({ ...product });
    setSelectedImages(
      product.images.map((img) => ({
        file: null,
        preview: `http://localhost:5000/${img}`,
      }))
    );
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const formData = new FormData();
      formData.append("name", editingProduct.name);
      formData.append("description", editingProduct.description);
      formData.append("price", editingProduct.price);
      formData.append("category", editingProduct.category);

      selectedImages.forEach((image, index) => {
        if (image.file) {
          formData.append("images", image.file);
        } else {
          formData.append("existingImages", image.preview.split("/").pop());
        }
      });

      const response = await axios.put(
        `http://localhost:5000/api/products/${editingProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(
        products.map((p) => (p._id === editingProduct._id ? response.data : p))
      );
      setIsEditModalOpen(false);
      Swal.fire("Updated!", "The product has been updated.", "success");
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error", "Failed to update the product", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages([...selectedImages, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="relative w-full h-48">
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:5000/${image}`}
            alt={`Product Image ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {product.images && product.images.length > 0 ? (
              <ImageSlider images={product.images} />
            ) : (
              <img
                src="/api/placeholder/400/300"
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-indigo-600 mb-2">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Category: {product.category}
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  onClick={() => handleUpdate(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="relative p-6 bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            onClick={() => setIsEditModalOpen(false)}
          >
            <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
          </button>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editingProduct?.name || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={editingProduct?.description || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={editingProduct?.price || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={editingProduct?.category || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <div className="mt-4 grid grid-cols-3 gap-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview}
                      alt={`Selected ${index}`}
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProductListPage;
