import Link from "next/link";
import Contact from "../contact/page";
import About from "../about/pade";

export default function Header() {
  return (
    
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6 flex flex-row-reverse justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-lg sm:text-2xl" >مروان العسالي    </h1>

      <nav >
        <ul className="flex space-x-6 ">
          <li >
            <Link href="/">
              <span className="hover:text-gray-300 transition-colors duration-300">الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="hover:text-gray-300 transition-colors duration-300">مشاريعي</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-300 transition-colors duration-300">تواصل معي</span>
            </Link>
          </li>
        </ul>

      </nav>
    </header>

  );
}
