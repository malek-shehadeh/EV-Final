// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const ShopOwnerProfile = ({ shopOwnerId }) => {
// //   const [profile, setProfile] = useState(null);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editedProfile, setEditedProfile] = useState({});
// //   const [profilePicture, setProfilePicture] = useState(null);

// //   useEffect(() => {
// //     fetchProfile();
// //   }, [shopOwnerId]);

// //   const fetchProfile = async () => {
// //     try {
// //       const response = await axios.get(
// //         `http://localhost:5000/api/shop-owners/${shopOwnerId}`
// //       );
// //       setProfile(response.data);
// //       setEditedProfile(response.data);
// //     } catch (error) {
// //       console.error("Error fetching profile:", error);
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditedProfile({ ...editedProfile, [name]: value });
// //   };

// //   const handleFileChange = (e) => {
// //     setProfilePicture(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     Object.keys(editedProfile).forEach((key) => {
// //       formData.append(key, editedProfile[key]);
// //     });
// //     if (profilePicture) {
// //       formData.append("profilePicture", profilePicture);
// //     }

// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5000/api/shop-owners/${shopOwnerId}`,
// //         formData,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         }
// //       );
// //       setProfile(response.data.shopOwner);
// //       setIsEditing(false);
// //     } catch (error) {
// //       console.error("Error updating profile:", error);
// //     }
// //   };

// //   if (!profile) return <div>Loading...</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Shop Owner Profile</h1>
// //       {isEditing ? (
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block mb-1">Owner Name:</label>
// //             <input
// //               type="text"
// //               name="ownerName"
// //               value={editedProfile.ownerName}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Shop Phone:</label>
// //             <input
// //               type="text"
// //               name="shopPhone"
// //               value={editedProfile.shopPhone}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Email:</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={editedProfile.email}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Shop Name:</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={editedProfile.name}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Address:</label>
// //             <input
// //               type="text"
// //               name="address"
// //               value={editedProfile.address}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Website:</label>
// //             <input
// //               type="text"
// //               name="website"
// //               value={editedProfile.website}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1">Profile Picture:</label>
// //             <input
// //               type="file"
// //               onChange={handleFileChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white px-4 py-2 rounded"
// //           >
// //             Save Changes
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => setIsEditing(false)}
// //             className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
// //           >
// //             Cancel
// //           </button>
// //         </form>
// //       ) : (
// //         <div className="space-y-4">
// //           <img
// //             src={profile.profilePicture || "/api/placeholder/150/150"}
// //             alt="Shop Owner"
// //             className="w-32 h-32 rounded-full object-cover"
// //           />
// //           <p>
// //             <strong>Owner Name:</strong> {profile.ownerName}
// //           </p>
// //           <p>
// //             <strong>Shop Phone:</strong> {profile.shopPhone}
// //           </p>
// //           <p>
// //             <strong>Email:</strong> {profile.email}
// //           </p>
// //           <p>
// //             <strong>Shop Name:</strong> {profile.name}
// //           </p>
// //           <p>
// //             <strong>Address:</strong> {profile.address}
// //           </p>
// //           <p>
// //             <strong>Website:</strong> {profile.website}
// //           </p>
// //           <button
// //             onClick={() => setIsEditing(true)}
// //             className="bg-green-500 text-white px-4 py-2 rounded"
// //           >
// //             Edit Profile
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ShopOwnerProfile;
// ///////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ShopOwnerProfile = ({ shopOwnerId }) => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, [shopOwnerId]);

//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/shop-owners/${shopOwnerId}`
//       );
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError("Failed to load profile. Please try again later.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(editedProfile).forEach((key) => {
//       formData.append(key, editedProfile[key]);
//     });
//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/shop-owners/${shopOwnerId}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setProfile(response.data.shopOwner);
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError("Failed to update profile. Please try again later.");
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Shop Owner Profile</h1>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* ... (form fields remain the same) ... */}
//         </form>
//       ) : (
//         <div className="space-y-4">
//           <img
//             src={profile.profilePicture || "/api/placeholder/150/150"}
//             alt="Shop Owner"
//             className="w-32 h-32 rounded-full object-cover"
//           />
//           <p>
//             <strong>Owner Name:</strong> {profile.ownerName}
//           </p>
//           <p>
//             <strong>Shop Phone:</strong> {profile.shopPhone}
//           </p>
//           <p>
//             <strong>Email:</strong> {profile.email}
//           </p>
//           <p>
//             <strong>Shop Name:</strong> {profile.name}
//           </p>
//           <p>
//             <strong>Address:</strong> {profile.address}
//           </p>
//           <p>
//             <strong>Website:</strong> {profile.website}
//           </p>
//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopOwnerProfile;
// ///////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// const ShopOwnerProfile = ({ shopOwnerId }) => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (shopOwnerId) {
//       fetchProfile();
//     } else {
//       setError("Invalid shop owner ID");
//     }
//   }, [shopOwnerId]);

//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/shop-owners/${shopOwnerId}`);
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to load profile. Please try again later."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(editedProfile).forEach((key) => {
//       formData.append(key, editedProfile[key]);
//     });
//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const response = await axios.put(
//         `${API_URL}/shop-owners/${shopOwnerId}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setProfile(response.data.shopOwner);
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to update profile. Please try again later."
//       );
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   // Rest of the component remains the same...
// };

// export default ShopOwnerProfile;
//////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // تأكد من أنك قمت بتعيين هذا المتغير في ملف .env الخاص بك
// const API_URL = "http://localhost:5000/api";

// const ShopOwnerProfile = ({ shopOwnerToken }) => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState(null);

//   // تحقق من shopOwnerId قبل استدعاء fetchProfile
//   useEffect(() => {
//     console.log("Shop Owner ID:", shopOwnerToken); // طباعة shopOwnerId للتحقق منه
//     if (shopOwnerToken) {
//       fetchProfile();
//     } else {
//       setError("Invalid shop owner ID");
//     }
//   }, [shopOwnerToken]);

//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/shop-owners/${shopOwnerToken}`
//       );
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to load profile. Please try again later."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(editedProfile).forEach((key) => {
//       formData.append(key, editedProfile[key]);
//     });
//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const response = await axios.put(
//         `${API_URL}/shop-owners/${shopOwnerToken}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setProfile(response.data.shopOwner);
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to update profile. Please try again later."
//       );
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Shop Owner Profile</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="ownerName"
//             value={editedProfile.ownerName || ""}
//             onChange={handleInputChange}
//           />
//           <input type="file" onChange={handleFileChange} />
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div>
//           <p>{profile.ownerName}</p>
//           <p>{profile.email}</p>
//           {profile.profilePicture && (
//             <img src={`/${profile.profilePicture}`} alt="Profile" />
//           )}
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopOwnerProfile;

// /////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api";

// const ShopOwnerProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.get(`${API_URL}/shop-owners/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to load profile. Please try again later."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(editedProfile).forEach((key) => {
//       formData.append(key, editedProfile[key]);
//     });
//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.put(
//         `${API_URL}/shop-owners/profile`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setProfile(response.data.shopOwner);
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(
//         error.response?.data?.message ||
//           error.response?.data?.error ||
//           error.message ||
//           "Failed to update profile. Please try again later."
//       );
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Shop Owner Profile</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="ownerName"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="ownerName"
//               type="text"
//               name="ownerName"
//               value={editedProfile.ownerName || ""}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="profilePicture"
//             >
//               Profile Picture
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="profilePicture"
//               type="file"
//               onChange={handleFileChange}
//             />
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Save
//           </button>
//         </form>
//       ) : (
//         <div className="space-y-4">
//           <p className="text-gray-700">
//             <span className="font-bold">Name:</span> {profile.ownerName}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-bold">Email:</span> {profile.email}
//           </p>
//           {profile.profilePicture && (
//             <img
//               src={`${API_URL}/${profile.profilePicture}`}
//               alt="Profile"
//               className="w-32 h-32 object-cover rounded-full"
//             />
//           )}
//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Edit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopOwnerProfile;
/////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const ShopOwnerProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.get(`${API_URL}/shop-owners/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setEditedProfile(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError(
        error.response?.data?.message ||
          "Failed to load profile. Please try again later."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(editedProfile).forEach((key) => {
      formData.append(key, editedProfile[key]);
    });
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.put(
        `${API_URL}/shop-owners/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(response.data.shopOwner);
      setIsEditing(false);
      setError(null);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Failed to update profile. Please try again later."
      );
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Shop Owner Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ownerName"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ownerName"
              type="text"
              name="ownerName"
              value={editedProfile.ownerName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profilePicture"
            >
              Profile Picture
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profilePicture"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-bold">Name:</span> {profile.ownerName}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span> {profile.email}
          </p>
          {profile.profilePicture && (
            <img
              src={`${API_URL}/${profile.profilePicture}`}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopOwnerProfile;
