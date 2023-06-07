import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="py-20"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">Simple APP</h2>
          <h3 className="text-2xl mb-8 text-gray-200">APP Router</h3>

          <Link
            href="/login"
            className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
