export const Navbar = () => {
  return (
    <nav>
        <ul className="flex gap-6">
          <li>
            <a
              className="border-b-2 border-r-2 pr-1 border-transparent hover:border-teal-200 hover:text-teal-200  transition-colors duration-400"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-r-2 pr-1 border-transparent hover:border-teal-200 hover:text-teal-200  transition-colors duration-400"
              href="#"
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-r-2 pr-1 border-transparent hover:border-teal-200 hover:text-teal-200  transition-colors duration-400"
              href="#"
            >
              Sing In
            </a>
          </li>
        </ul>
      </nav>
  )
}
