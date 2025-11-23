import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex space-x-6">
        {/* Add a link to your other project if hosted externally */}
        <a href="https://tmatis.github.io/CRUD-Final-Project-CIT-21500/home.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Home
        </a>
        <a href="https://tmatis.github.io/CRUD-Final-Project-CIT-21500/Pages.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Techniques
        </a>        <a href="https://tmatis.github.io/CRUD-Final-Project-CIT-21500/info.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Info
        </a>        <a href="https://tmatis.github.io/CRUD-Final-Project-CIT-21500/Contact.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Contact
        </a>        <a href="https://tmatis.github.io/CRUD-Final-Project-CIT-21500/index.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Library
        </a>

        {/* Internal link to HomePage within the React app */}
        <Link to="/" className="hover:underline">Hobbies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;