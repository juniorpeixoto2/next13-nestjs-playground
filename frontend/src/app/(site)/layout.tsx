import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="text-gray-700 bg-white">
        <nav>
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <Link className="font-bold text-2xl lg:text-4xl" href="/">
              NEXTJS 13
            </Link>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex">
                <li>
                  <a className="px-4 font-bold" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Link href="login" className="px-4 hover:text-gray-800">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="min-h-80">{children}</div>
        <footer className="bg-gray-100">
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Company</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Official Blog
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
