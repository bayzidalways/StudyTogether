import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const user = await loginWithEmail(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: any) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/dashboard");
    } catch (error) {
      console.error("Social sign-in error:", error);
      setError("Social sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg shadow-blue-50/50 border border-blue-50">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <Lock size={32} color="#3B82F6" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">
          Sign in to StudyTogether
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Access your personalized learning dashboard
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-1">Login Error</h3>
            <p>{error}</p>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={20} color="#9CA3AF" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-gray-600 text-sm font-medium">
                Password
              </label>
              <Link to="#" className="text-blue-600 text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} color="#9CA3AF" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#9CA3AF" />
                ) : (
                  <Eye size={20} color="#9CA3AF" />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="mt-8">
          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Register now
            </Link>
          </p>
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

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-4">Sign in with</p>
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
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <Facebook size={24} color="#1877F2" />
            </button>
            <button
              onClick={() => handleSocialSignIn(githubProvider)}
              aria-label="Sign in with GitHub"
              className="flex h-12 w-12 text-black cursor-pointer items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <FaGithub size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
