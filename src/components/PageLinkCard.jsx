import { useNavigate } from 'react-router-dom';

export default function PageLinkCard({ title, description, to }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(to)}
      className="cursor-pointer p-6 rounded-xl shadow-md bg-white hover:scale-105 hover:bg-gray-100 transition-all duration-500"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}