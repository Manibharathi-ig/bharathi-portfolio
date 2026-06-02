import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/admin/login",
        "https://bharathi-portfolio-api.onrender.com/api/admin/login",
        {
          email,
          password,
        },
      );

      alert(response.data.message);

      localStorage.setItem("admin", "true");

      navigate("/dashboard");

      navigate("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-cyan-500/20 rounded-xl p-8 bg-zinc-900">
        <h1 className="text-3xl font-bold text-white mb-6">Admin Login</h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-black border border-white/10 rounded-lg text-white"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-black border border-white/10 rounded-lg text-white"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
