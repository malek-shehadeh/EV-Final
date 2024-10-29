// import React from "react";
// import { useNavigate } from "react-router-dom"; // Assuming you are using react-router

// const SidebarComponent = ({ setActivePage }) => {
//   const Navigate = useNavigate();

//   // Function to handle logout
//   const handleLogout = () => {
//     // Remove token from local storage
//     localStorage.removeItem("shopOwnerToken");
//     // Redirect to login page
//     Navigate("/login");
//   };

//   // Check if token exists in local storage
//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>

//           {/* Show Logout button only if the user is logged in */}
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               {/* Logout Icon */}
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
//                 ></path>
//               </svg>
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
/////////////

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SidebarComponent = ({ setActivePage }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");
//   };

//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("Orders")}
//           >
//             Orders
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("profile")}
//           >
//             Shop Owner Profile
//           </button>
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
//                 ></path>
//               </svg>
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
/////////////////////////////
import React from "react";
import { useNavigate } from "react-router-dom";



const SidebarComponent = ({ setActivePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("shopOwnerToken");
    navigate("/login");

  };

  const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

  return (
    <div className="w-64 h-screen bg-gray-100">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
        <nav>
          <button
            className="w-full text-left p-2 mb-2 hover:bg-gray-200"
            onClick={() => setActivePage("add")}
          >
            Add Product
          </button>
          <button
            className="w-full text-left p-2 mb-2 hover:bg-gray-200"
            onClick={() => setActivePage("list")}
          >
            Product List
          </button>
          <button
            className="w-full text-left p-2 mb-2 hover:bg-gray-200"
            onClick={() => setActivePage("orders")} // تغيير هنا
          >
            Orders
          </button>
          <button
            className="w-full text-left p-2 mb-2 hover:bg-gray-200"
            onClick={() => setActivePage("profile")}
          >
            Shop Owner Profile
          </button>
          {isLoggedIn && (
            <button
              className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
