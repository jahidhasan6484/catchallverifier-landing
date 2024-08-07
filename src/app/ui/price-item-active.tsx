import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import mostPopular from "@/static/images/most-popular.svg";
import Image from "next/image";
import clsx from "clsx";

export function PriceItemActive({
  credit,
  price,
  mostPopularOnLeft,
}: {
  credit: string;
  price: string;
  mostPopularOnLeft?: boolean;
}) {
  return (
    <div className="shadow-[0px_0px_40px_0px_rgba(103,62,229,.1)] bg-white my-4 rounded-2xl py-10 border-2 border-primary relative">
      <Image
        src={mostPopular}
        alt="most popular"
        className={clsx("absolute -top-[109px]  z-10 hidden lg:block", {
          "-right-[271px]": !mostPopularOnLeft,
          "-left-[5px]": mostPopularOnLeft,
        })}
      />
      <div className="text-center text-sm font-medium text-on-surface">
        {credit} Credits
      </div>
      <div className="text-center text-primary text-3xl font-bold mt-3">
        {price}
      </div>

      <div className="text-on-surface-variant text-xl mt-10 mb-6">
        What&apos;s Included
      </div>
      <hr className="mx-5 mb-4 border border-[#F9F9F9]" />
      <div className="flex items-center p-1 mx-5">
        <CheckCircleIcon
          className="w-5 h-5 mr-2 text-primary"
          strokeWidth={3}
        />
        <span className="text-on-surface mr-1 flex-1 text-start">
          {credit} email verification
        </span>
      </div>
      <div className="flex items-center p-1 mx-5">
        <CheckCircleIcon
          className="w-5 h-5 mr-2 text-primary"
          strokeWidth={3}
        />
        <span className="text-on-surface mr-1 flex-1 text-start">
          Credits roll over (Unlimited)
        </span>
      </div>
      <div className="flex items-center p-1 mx-5">
        <CheckCircleIcon
          className="w-5 h-5 mr-2 text-primary"
          strokeWidth={3}
        />
        <span className="text-on-surface mr-1 flex-1 text-start">
          Bulk & single Verification
        </span>
      </div>
      <div className="flex items-center p-1 mx-5">
        <CheckCircleIcon
          className="w-5 h-5 mr-2 text-primary"
          strokeWidth={3}
        />
        <span className="text-on-surface mr-1 flex-1 text-start">
          API Access
        </span>
      </div>

      <div className="flex mt-8">
        <Link
          href="https://app.catchallverifier.com/"
          className="bg-primary mx-5 flex-1 text-white font-medium py-3 rounded-full"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
