// import {
//   X,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   Upload,
//   User,
//   Phone,
//   Calendar,
//   Globe,
//   MapPin,
//   ArrowRight,
// } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// interface AccountFormProps {
//   isLogin: boolean;
//   setIsLogin: (value: boolean) => void;
//   closeAccountForm: () => void;
// }

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   accountType: string;
//   phoneNumber: string;
//   dateOfBirth: string;
//   country: string;
//   address: string;
//   profileImage: File | null;
// }

// export default function AccountForm({
//   isLogin,
//   setIsLogin,
//   closeAccountForm,
// }: AccountFormProps) {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     accountType: "savings",
//     phoneNumber: "",
//     dateOfBirth: "",
//     country: "",
//     address: "",
//     profileImage: null,
//   });

//     const handleSubmit = async (e: React.FormEvent) => {
//       e.preventDefault();
//       setIsLoading(true);

//       try {
//         if (isLogin) {
//           // Handle login
//           const response = await fetch("https://caixibankio.com/api/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email: formData.email,
//               password: formData.password,
//             }),
//           });

//           const data = await response.json();
//           if (response.ok) {
//             toast.success("Login successful!");
//             navigate("/user/dashboard/home"); // Redirect to dashboard
//           } else {
//             throw new Error(data.message || "Login failed");
//           }
//         } else {
//           // Handle account creation
//           if (formData.password !== formData.confirmPassword) {
//             throw new Error("Passwords do not match");
//           }

//           const formDataToSend = new FormData();
//           formDataToSend.append("firstName", formData.firstName);
//           formDataToSend.append("lastName", formData.lastName);
//           formDataToSend.append("email", formData.email);
//           formDataToSend.append("accountType", formData.accountType);
//           formDataToSend.append("dateOfBirth", formData.dateOfBirth);
//           formDataToSend.append("phoneNumber", formData.phoneNumber);
//           formDataToSend.append("country", formData.country);
//           formDataToSend.append("address", formData.address);
//           formDataToSend.append("password", formData.password);
//           if (formData.profileImage) {
//             formDataToSend.append("profilePicture", formData.profileImage);
//           }

//           const response = await fetch("https://caixibankio.com/api/register", {
//             method: "POST",
//             body: formDataToSend,
//           });

//           const data = await response.json();
//           if (response.ok) {
//             toast.success("Account created successfully!");
//             setIsLogin(true); // Switch to login form
//             // Reset form except email and password
//             setFormData((prev) => ({
//               ...prev,
//               firstName: "",
//               lastName: "",
//               confirmPassword: "",
//               accountType: "savings",
//               phoneNumber: "",
//               dateOfBirth: "",
//               country: "",
//               address: "",
//               profileImage: null,
//             }));
//           } else {
//             throw new Error(data.message || "Registration failed");
//           }
//         }
//       } catch (error) {
//         toast.error(
//           error instanceof Error ? error.message : "An error occurred"
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] ?? null;
//     setFormData((prev) => ({
//       ...prev,
//       profileImage: file,
//     }));
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
//         <div className="sticky top-0 bg-gray-50 border-b border-gray-200 p-6 rounded-t-2xl z-1">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900">
//                 {isLogin ? "Welcome Back" : "Create Your Account"}
//               </h2>
//               <p className="text-gray-600 mt-2">
//                 {isLogin
//                   ? "Sign in to access your account"
//                   : "Join millions of satisfied customers"}
//               </p>
//             </div>
//             <button
//               onClick={closeAccountForm}
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <X className="h-6 w-6 text-gray-500" />
//             </button>
//           </div>
//           <div className="flex space-x-4 mt-4">
//             <button
//               onClick={() => setIsLogin(false)}
//               className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
//                 !isLogin
//                   ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200"
//                   : "text-gray-600 hover:text-emerald-600"
//               }`}
//             >
//               Create Account
//             </button>
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
//                 isLogin
//                   ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200"
//                   : "text-gray-600 hover:text-emerald-600"
//               }`}
//             >
//               Already have an account?
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           {isLogin ? (
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                     <input
//                       type="email"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       placeholder="Enter your password"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-5 w-5" />
//                       ) : (
//                         <Eye className="h-5 w-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
//                   />
//                   <span className="ml-2 text-sm text-gray-600">
//                     Remember me
//                   </span>
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
//               >
//                 Sign In
//               </button>
//             </form>
//           ) : (
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Profile Image Upload */}
//               <div className="text-center">
//                 <div className="relative inline-block">
//                   <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <User className="h-12 w-12 text-white" />
//                   </div>
//                   <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
//                     <Upload className="h-4 w-4 text-gray-600" />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 <p className="text-sm text-gray-600">Upload profile picture</p>
//               </div>

//               {/* Personal Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Personal Information
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       First Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       placeholder="Enter your first name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Last Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       placeholder="Enter your last name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Date of Birth *
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type="date"
//                         name="dateOfBirth"
//                         value={formData.dateOfBirth}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type="tel"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         placeholder="+1 (555) 123-4567"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Contact Information
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Country *
//                     </label>
//                     <div className="relative">
//                       <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         required
//                       >
//                         <option value="">Select your country</option>
//                         <option value="US">United States</option>
//                         <option value="CA">Canada</option>
//                         <option value="UK">United Kingdom</option>
//                         <option value="AU">Australia</option>
//                         <option value="DE">Germany</option>
//                         <option value="FR">France</option>
//                         <option value="JP">Japan</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Address *
//                   </label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <textarea
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       rows={3}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       placeholder="Enter your full address"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Account Details */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Account Details
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Account Type *
//                     </label>
//                     <select
//                       name="accountType"
//                       value={formData.accountType}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                       required
//                     >
//                       <option value="savings">Savings Account</option>
//                       <option value="checking">Checking Account</option>
//                       <option value="business">Business Account</option>
//                       <option value="premium">Premium Account</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Password *
//                     </label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         placeholder="Create a strong password"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                       >
//                         {showPassword ? (
//                           <EyeOff className="h-5 w-5" />
//                         ) : (
//                           <Eye className="h-5 w-5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Confirm Password *
//                     </label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                         className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
//                         placeholder="Confirm your password"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setShowConfirmPassword(!showConfirmPassword)
//                         }
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                       >
//                         {showConfirmPassword ? (
//                           <EyeOff className="h-5 w-5" />
//                         ) : (
//                           <Eye className="h-5 w-5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Terms and Conditions */}
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <div className="flex items-start space-x-3">
//                   <input
//                     type="checkbox"
//                     id="terms"
//                     className="mt-1 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
//                     required
//                   />
//                   <label htmlFor="terms" className="text-sm text-gray-600">
//                     I agree to the{" "}
//                     <button
//                       type="button"
//                       className="text-emerald-600 hover:text-emerald-700 underline"
//                     >
//                       Terms of Service
//                     </button>{" "}
//                     and{" "}
//                     <button
//                       type="button"
//                       className="text-emerald-600 hover:text-emerald-700 underline"
//                     >
//                       Privacy Policy
//                     </button>
//                     . I understand that SecureBank will use my information to
//                     provide banking services and may contact me about my
//                     account.
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
//               >
//                 <span>Create My Account</span>
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import {
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Upload,
  User,
  Phone,
  Calendar,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AccountFormProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  closeAccountForm: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  phoneNumber: string;
  dateOfBirth: string;
  country: string;
  address: string;
  profileImage: File | null;
}

export default function AccountForm({
  isLogin,
  setIsLogin,
  closeAccountForm,
}: AccountFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "savings",
    phoneNumber: "",
    dateOfBirth: "",
    country: "",
    address: "",
    profileImage: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        // Handle login
        const response = await fetch(
          "https://worldbankio.com/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          toast.success("Login successful!");
          navigate("/user/dashboard/home"); // Redirect to dashboard
        } else {
          throw new Error(data.message || "Login failed");
        }
      } else {
        // Handle account creation
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }

        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("accountType", formData.accountType);
        formDataToSend.append("dateOfBirth", formData.dateOfBirth);
        formDataToSend.append("phoneNumber", formData.phoneNumber);
        formDataToSend.append("country", formData.country);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("password", formData.password);
        if (formData.profileImage) {
          formDataToSend.append("profilePicture", formData.profileImage);
        }

        const response = await fetch(
          "https://worldbankio.com/api/users/create",
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        const data = await response.json();
        if (response.ok) {
          toast.success("Account created successfully!");
          setIsLogin(true); // Switch to login form
          // Reset form except email and password
          setFormData((prev) => ({
            ...prev,
            firstName: "",
            lastName: "",
            confirmPassword: "",
            accountType: "savings",
            phoneNumber: "",
            dateOfBirth: "",
            country: "",
            address: "",
            profileImage: null,
          }));
        } else {
          throw new Error(data.message || "Registration failed");
        }
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
        <div className="sticky top-0 bg-gray-50 border-b border-gray-200 p-6 rounded-t-2xl z-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isLogin ? "Welcome Back" : "Create Your Account"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isLogin
                  ? "Sign in to access your account"
                  : "Join millions of satisfied customers"}
              </p>
            </div>
            <button
              onClick={closeAccountForm}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isLogin
                  ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Create Account
            </button>
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isLogin
                  ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-200"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Already have an account?
            </button>
          </div>
        </div>

        <div className="p-6">
          {isLogin ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Profile Image Upload */}
              <div className="text-center">
                <div className="relative inline-block">
                  {formData.profileImage ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={URL.createObjectURL(formData.profileImage)}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-white" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <Upload className="h-4 w-4 text-gray-600" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-600">Upload profile picture</p>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      placeholder="Enter your full address"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Account Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Type *
                    </label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                      required
                    >
                      <option value="savings">Savings Account</option>
                      <option value="checking">Checking Account</option>
                      <option value="business">Business Account</option>
                      <option value="premium">Premium Account</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Privacy Policy
                    </button>
                    . I understand that SecureBank will use my information to
                    provide banking services and may contact me about my
                    account.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>
                  {isLoading ? "Creating Account..." : "Create My Account"}
                </span>
                {!isLoading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}