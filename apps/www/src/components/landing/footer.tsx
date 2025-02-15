import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-400">
              Product
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-400">
              Company
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-400">
              Resources
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Support
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Status
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-400">
              Legal
            </h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-zinc-300 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6 border-t border-zinc-800  text-center text-sm text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} CodeSentinels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
