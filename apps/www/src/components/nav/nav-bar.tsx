"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@codesentinel/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@codesentinel/ui/components/sheet";
import { Settings } from "./settings";
import { signOut, useSession } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSession();
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              codesentinel
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              {currentUser?.data?.user.email && <Settings />}

              {!currentUser?.data?.user.email && (
                <Button
                  key="sign-in"
                  className="w-full bg-blue-600/10 text-blue-700 rounded-xl hover:bg-blue-600/20 hover:text-blue-700 focus:outline-none"
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                >
                  sign in
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-white focus:outline-none"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px]  text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="w-full hover:text-white focus:outline-none flex  justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                  {currentUser?.data?.user.email && (
                    <>
                      <div className=" flex flex-col space-y-2">
                        <Button
                          key="profile"
                          variant="ghost"
                          className="w-full hover:text-white focus:outline-none flex  justify-start"
                          onClick={() => setIsOpen(false)}
                        >
                          <div>Profile</div>
                        </Button>
                        <Button
                          key="logout"
                          variant="destructive"
                          className="w-full hover:text-white focus:outline-none"
                          onClick={async () => {
                            setIsOpen(false);
                            await signOut({
                              fetchOptions: {
                                onSuccess: () => {
                                  router.push("/");
                                },
                              },
                            });
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    </>
                  )}
                  {!currentUser?.data?.user.email && (
                    <Button
                      key="login"
                      variant="ghost"
                      className="w-full bg-blue-600/10 text-blue-700 rounded-xl hover:bg-blue-600/20 hover:text-blue-700 focus:outline-none"
                      onClick={() => {
                        router.push("/sign-in");
                        setIsOpen(false);
                      }}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
