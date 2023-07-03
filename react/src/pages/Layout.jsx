import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let { data } = await axios.get("http://localhost:8000/api/categories");
  //     setCategories(data);
  //   };
  //   fetchData();
  //   alert(hello)
  // }, []);

  return (
    <div className="bg-slate-50 h-screen">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

          <ul className="font-medium flex items-center border rounded-lg flex-row space-x-8">
            {/* <li>
              <select name="categories" id="">
                {categories.map((categorie) => {
                  return (
                    <option key={categorie.id} value="">
                      {categorie.category}
                    </option>
                  );
                })}
              </select>
            </li> */}
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
