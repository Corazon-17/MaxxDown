export default function Button({ title, icon, onClick }) {
  return (
    <button 
      className="hover:bg-gray-400"
      title={title} 
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
