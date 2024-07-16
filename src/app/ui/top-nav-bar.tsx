"use client";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoFull from "@/static/images/logo_full.svg";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function TopNavBar() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  function openNav() {
    setOpen(true);
  }

  function closeNav() {
    setOpen(false);
  }
  return (
    <div>
      <div className="bg-[#2ECE8E1F] blur-[100px] fixed w-full aspect-square top-0 left-0 -translate-y-1/2 -z-20 rounded-full lg:hidden"></div>
      <div className="bg-[#2ECE8E1F] blur-[20px] fixed max-w-2xl w-full aspect-square top-0 left-0 -translate-y-1/4 -translate-x-1/4 -z-20 rounded-full hidden lg:block"></div>
      <div className="h-16 bg-surface drop-shadow-nav fixed top-0 left-0 flex justify-between items-center w-full z-40 ">
        <div className="flex items-center">
          <Link href="/" className="mr-20">
            <Image
              src={logoFull}
              width={150}
              className="ml-3 z-50"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex justify-center font-medium">
          <Link
            href="/"
            className={clsx("p-1 hidden lg:block mr-5", {
              "text-on-surface": pathname != "/",
              "text-primary font-bold": pathname == "/",
            })}
          >
            Home
          </Link>
          <Link
            href="https://catchallverifier.readme.io/"
            className="text-on-surface p-1 hidden lg:block mr-5"
          >
            API Integration
          </Link>
          <Link
            href="/pricing"
            className={clsx("p-1 hidden lg:block mr-5", {
              "text-on-surface": pathname != "/pricing",
              "text-primary font-bold": pathname == "/pricing",
            })}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={clsx("p-1 hidden lg:block", {
              "text-on-surface": pathname != "/contact",
              "text-primary font-bold": pathname == "/contact",
            })}
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="https://app.catchallverifier.com/register"
            className="text-center border-2 border-primary p-2 font-medium px-5 text-primary rounded-lg block"
          >
            Try it free
          </Link>
          <Link
            href="https://app.catchallverifier.com/"
            className="text-center py-2 px-8  text-white bg-primary rounded-lg block ml-5 mr-10"
          >
            Sign in
          </Link>
        </div>
        <div className="lg:hidden">
          {!open && (
            <button className="p-5" onClick={openNav}>
              <Bars3Icon className="h-6 w-6 text-primary" strokeWidth={2} />
            </button>
          )}
          {open && (
            <button className="p-5" onClick={closeNav}>
              <XMarkIcon className="h-6 w-6 text-primary" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        as="aside"
        className="fixed inset-0 lg:hidden"
      >
        <DialogPanel className="relative">
          <div className="fixed bg-surface w-full z-40 h-screen mt-16">
            <div className="flex justify-center">
              <Link href="/" className="mx-1 p-2 text-on-surface block">
                Home
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://catchallverifier.readme.io/"
                className="mx-1 p-2 text-on-surface block"
              >
                API Integration
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/pricing"
                className="mx-1 p-2 text-on-surface block"
                onClick={closeNav}
              >
                Pricing
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="mx-1 p-2 text-on-surface block"
                onClick={closeNav}
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-center mt-2">
              <Link
                href="https://app.catchallverifier.com/register"
                className="text-center border-2 border-primary py-2 px-10 font-medium text-primary rounded-lg"
              >
                Try for free
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                href="https://app.catchallverifier.com/"
                className="text-center py-2 px-10 font-bold text-white bg-primary rounded-lg"
              >
                Sign in
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
