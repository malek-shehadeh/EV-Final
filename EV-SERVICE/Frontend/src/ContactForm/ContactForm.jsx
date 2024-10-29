// import React from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const ContactForm = () => {
//   return (
//     <div className="pt-24">
//       <Header />
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-6/12 p-4">
//             <div className="relative z-10 bg-white p-8 mt-4 sm:mt-0 rounded-lg shadow-md">
//               <em className="block text-lg font-medium mb-4">
//                 Enough about Us. Let’s Talk about Your Charger Project Now.
//               </em>
//               <div className="text-gray-600 text-sm mb-4"></div>
//               <ul className="list-disc pl-5 space-y-2">
//                 <li>Professional feedback within 8 hours</li>
//                 <li>Full capabilities to rely on</li>
//                 <li>Best possible service for you</li>
//                 <li>Fast delivery in 35-40 days</li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full sm:w-6/12 p-4 relative">
//             <div
//               className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
//               style={{ backgroundImage: "url('../images/bg_mes.jpg')" }}
//             ></div>
//             <div className="relative z-20 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-md">
//               <div className="flex items-center text-white mb-4">
//                 <em className="text-xl font-medium">
//                   Contact Our
//                   <br />
//                   Technical Experts
//                 </em>
//               </div>
//               <form
//                 method="post"
//                 id="email_form"
//                 action="/inquiryStore"
//                 className="space-y-4"
//               >
//                 <input
//                   type="hidden"
//                   name="_token"
//                   value="AbbsiyssLPSSIOGCSdgWLqgF2z5FYkhCAcPBXJFL"
//                 />
//                 <div className="hidden">
//                   <input
//                     name="my_name_w7kcNM1xKU7DggfP"
//                     type="text"
//                     id="my_name_w7kcNM1xKU7DggfP"
//                   />
//                   <input
//                     name="valid_from"
//                     type="text"
//                     value="eyJpdiI6IktRaktXd1FWaHZpUVpRaDUvVm81RkE9PSIsInZhbHVlIjoiWWRqNUg2REtHcVBjZWh1L0Y3MWtuUT09IiwibWFjIjoiY2UzMDM2NWI2ZWU1YzM1ZDMyZjc3YTMyMDZkYWQzNmY3MmViNDA4OWE2MGEzZjFlZTM2NzQ3MzhlYzFiMjc0MCIsInRhZyI6IiJ9"
//                   />
//                 </div>
//                 <div className="space-y-4">
//                   <input
//                     required
//                     type="text"
//                     name="msg_name"
//                     className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
//                     placeholder="Name *"
//                   />
//                   <input
//                     required
//                     type="email"
//                     name="msg_email"
//                     id="msg_email"
//                     className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
//                     placeholder="Email *"
//                   />
//                   <input
//                     type="text"
//                     name="msg_phone"
//                     id="msg_phone"
//                     className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
//                     placeholder="Tel/Whatsapp"
//                   />
//                   <textarea
//                     required
//                     id="meText"
//                     placeholder="Enter product details (such as color, size, materials etc.) and other specific requirements to receive an accurate quote."
//                     maxLength="3000"
//                     name="msg_content"
//                     className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none h-24"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full mt-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
//                 >
//                   Send Your Inquiry
//                 </button>
//               </form>
//               <div className="text-white text-xs mt-4">
//                 *We respect your confidentiality and all information are
//                 protected.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactForm;
// ////////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import {
//   Phone,
//   Printer,
//   Mail,
//   Youtube,
//   Twitter,
//   Instagram,
// } from "lucide-react";
// import ReCAPTCHA from "react-google-recaptcha";
// import Swal from "sweetalert2";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     national_id: "",
//     subject: "",
//     message: "",
//     captchaValue: "",
//   });
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         Swal.fire({
//           title: "Success",
//           text: "The form was successfully submitted!",
//           icon: "success",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#8E1B3B",
//         }).then(() => {
//           // Clear the form
//           setFormData({
//             email: "",
//             name: "",
//             national_id: "",
//             subject: "",
//             message: "",
//             captchaValue: "",
//           });
//         });
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "An error occurred while submitting the form.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#8E1B3B",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         title: "Error",
//         text: "An error occurred while submitting the form.",
//         icon: "error",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#8E1B3B",
//       });
//     }
//   };

//   const handleCaptchaChange = (value) => {
//     setFormData({
//       ...formData,
//       captchaValue: value,
//     });
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 p-6 gap-6 font-arabic">
//         {/* Left Column */}
//         <div className="w-full md:w-1/3 bg-[#8E1B3B] text-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold mb-4 text-right border-b pb-2">
//             Contact Addresses
//           </h2>
//           <div className="space-y-4">
//             <div className="flex items-center justify-end gap-2">
//               <span dir="ltr">962-786544235</span>
//               <Phone size={20} />
//             </div>
//             <div className="flex items-center justify-end gap-2">
//               <span dir="ltr">06-3866652</span>
//               <Printer size={20} />
//             </div>
//             <div className="flex items-center justify-end gap-2">
//               <span>info@Vote.gov.jo</span>
//               <Mail size={20} />
//             </div>
//           </div>
//           <div className="flex justify-end gap-4 mt-6">
//             <a
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Youtube
//                 size={24}
//                 className="hover:text-red-600 transition duration-300"
//               />
//             </a>
//             <a
//               href="https://www.twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Twitter
//                 size={24}
//                 className="hover:text-blue-500 transition duration-300"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Instagram
//                 size={24}
//                 className="hover:text-pink-500 transition duration-300"
//               />
//             </a>
//           </div>
//           <div className="text-right mt-6">
//             <h3 className="font-bold">
//               The Hashemite Kingdom of Jordan, Amman
//             </h3>
//           </div>
//           <div className="mt-4 bg-white rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33842.15205751555!2d35.83748228228823!3d31.953949790302307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f97f36d5dff%3A0x8f8a2a4c57f68c2f!2z2KfZhNmI2KfYqSDZhNmF2YjZhNmK2YXZhCDYp9mE2YbZgdi5INin2YTZhdi12KfZitin2YrYudmI2YjZhSBXZXN0IEJhbms!5e0!3m2!1sen!2sjo!4v1629308427384!5m2!1sen!2sjo"
//               width="100%"
//               height="200"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div
//           className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
//           style={{
//             backgroundImage: "url('/picture.jpg')",
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             backgroundBlendMode: "overlay",
//             backgroundPosition: "20% 30%",
//           }}
//         >
//           <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B] dark:text-white">
//             Select the type of service to contact us
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   *Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Email"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   *Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Name"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   National ID Number
//                 </label>
//                 <input
//                   type="text"
//                   name="national_id"
//                   value={formData.national_id}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="National ID Number"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Subject"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col items-end">
//               <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                 *Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                 placeholder="Message"
//                 rows="4"
//                 required
//               />
//             </div>

//             <div className="flex justify-end">
//               <ReCAPTCHA
//                 sitekey="6LcMHicqAAAAAKw_uI8m3rY6n-SWwn6gg2qVGhqs"
//                 onChange={handleCaptchaChange}
//                 theme={darkMode ? "dark" : "light"}
//               />
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 type="submit"
//                 className="bg-[#8E1B3B] text-white px-6 py-2 rounded-md hover:bg-[#A94B4D] transition duration-300"
//               >
//                 Send
//               </button>
//               <button
//                 type="button"
//                 className="bg-gray-300 text-black dark:bg-gray-600 dark:text-white px-6 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-300"
//                 onClick={() =>
//                   setFormData({
//                     email: "",
//                     name: "",
//                     national_id: "",
//                     subject: "",
//                     message: "",
//                     captchaValue: "",
//                   })
//                 }
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactForm;
/////ok top////////
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import {
  Phone,
  Printer,
  Mail,
  Youtube,
  Twitter,
  Instagram,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    national_id: "",
    subject: "",
    message: "",
    captchaValue: "",
  });
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const response = await fetch("http://localhost:5000/api/contact", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      ///
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "The form was successfully submitted!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#8E1B3B",
        }).then(() => {
          // Clear the form
          setFormData({
            email: "",
            name: "",
            national_id: "",
            subject: "",
            message: "",
            captchaValue: "",
          });
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred while submitting the form.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#8E1B3B",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting the form.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#8E1B3B",
      });
    }
  };

  const handleCaptchaChange = (value) => {
    setFormData({
      ...formData,
      captchaValue: value,
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 p-6 gap-6 font-arabic">
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-[#8E1B3B] text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-right border-b pb-2">
            Contact Addresses
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-end gap-2">
              <span dir="ltr">962-786544235</span>
              <Phone size={20} />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span dir="ltr">06-3866652</span>
              <Printer size={20} />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>info@Vote.gov.jo</span>
              <Mail size={20} />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                size={24}
                className="hover:text-red-600 transition duration-300"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                size={24}
                className="hover:text-blue-500 transition duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={24}
                className="hover:text-pink-500 transition duration-300"
              />
            </a>
          </div>
          <div className="text-right mt-6">
            <h3 className="font-bold">
              The Hashemite Kingdom of Jordan, Amman
            </h3>
          </div>
          <div className="mt-4 bg-white rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33842.15205751555!2d35.83748228228823!3d31.953949790302307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f97f36d5dff%3A0x8f8a2a4c57f68c2f!2z2KfZhNmI2KfYqSDZhNmF2YjZhNmK2YXZhCDYp9mE2YbZgdi5INin2YTZhdi12KfZitin2YrYudmI2YjZhSBXZXN0IEJhbms!5e0!3m2!1sen!2sjo!4v1629308427384!5m2!1sen!2sjo"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('/picture.jpg')",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backgroundBlendMode: "overlay",
            backgroundPosition: "20% 30%",
          }}
        >
          <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B] dark:text-white">
            Select the type of service to contact us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col items-end">
                <label className="mb-1 text-[#8E1B3B] dark:text-white">
                  *Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                  placeholder="Email"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-end">
                <label className="mb-1 text-[#8E1B3B] dark:text-white">
                  *Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col items-end">
                <label className="mb-1 text-[#8E1B3B] dark:text-white">
                  National ID
                </label>
                <input
                  type="text"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                  placeholder="National ID"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-end">
                <label className="mb-1 text-[#8E1B3B] dark:text-white">
                  *Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <label className="mb-1 text-[#8E1B3B] dark:text-white">
                *Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                placeholder="Message"
                rows="5"
              />
            </div>
            <ReCAPTCHA
              sitekey="6LcMHicqAAAAAKw_uI8m3rY6n-SWwn6gg2qVGhqs"
              onChange={handleCaptchaChange}
              className="my-4"
            />
            <button
              type="submit"
              className="w-full bg-[#8E1B3B] text-white py-2 rounded-md hover:bg-[#7c1c2a] transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
