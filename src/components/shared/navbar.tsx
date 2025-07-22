import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="bg-white">
        <div className="container max-w-full mx-auto py-5 flex justify-between items-center shadow-md">
          {/* logo */}
          <Link href="/" className="font-medium text-2xl text-green-500">
            BiteCart
          </Link>

          {/* cart and profile icon */}
          <div className="flex items-center gap-6">
            <CiUser className="size-6" strokeWidth={1.1} />
            <Link href="/cart">
              <IoCartOutline className="size-6" strokeWidth={1.1} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
