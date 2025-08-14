import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function HomeButton() {
  return (
    <Link
      to="/"
      className="fixed top-6 left-6 z-50 p-3 rounded-full bg-black/30 hover:bg-black/50 
                 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <Home className="w-6 h-6 text-gray-300" />
    </Link>
  );
}
