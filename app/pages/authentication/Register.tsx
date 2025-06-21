import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";
import { Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "lib/firebase"; // Adjust path as needed

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function validateForm() {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCred.user, { displayName: formData.name });
      await sendEmailVerification(userCred.user);
      setSuccess(true);
      setFormData({ name: "", email: "", password: "" }); // ✅ Clear form
    } catch (err: any) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/weak-password":
          setError("Weak password");
          break;
        default:
          setError("Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSocialSignIn(provider: any) {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        setSuccess(true);
      } else {
        navigate("/dashboard");
      }
    } catch {
      setError("Social sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen  flex items-center  justify-center bg-gradient-to-b from-white to-blue-50 px-4 py-12">
      <div className="w-full  max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-6">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-check text-green-500 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Registration Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                A verification email has been sent. Please check your inbox.
              </p>
              <NavLink
                to="/login"
                className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                Continue to Login
              </NavLink>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Create your StudyTogether account
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <i className="fa-solid fa-exclamation-circle text-red-500"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={20} color="#9CA3AF" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={20} color="#9CA3AF" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 bg-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={20} color="#9CA3AF" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 bg-white"
                      placeholder="At least 6 characters"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    <span>Sign Up</span>
                  )}
                </button>
              </form>

              <div className="my-6 text-center text-gray-500">or</div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleSocialSignIn(googleProvider)}
                  aria-label="Sign in with Google"
                  className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  <FcGoogle size={24} />
                </button>
                <button
                  onClick={() => handleSocialSignIn(facebookProvider)}
                  aria-label="Sign in with Facebook"
                  className="flex h-12 w-12 items-center  cursor-pointer justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  <Facebook size={24} color="#1877F2" />
                </button>
                <button
                  onClick={() => handleSocialSignIn(githubProvider)}
                  aria-label="Sign in with GitHub"
                  className="flex h-12 w-12 cursor-pointer text-black items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  <FaGithub size={24} className=" " />
                </button>
              </div>

              <div className="mt-6 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Log In
                </NavLink>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By signing in, you agree to our{" "}
                  <Link to="#" className="text-blue-600 hover:underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
