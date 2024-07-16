import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { SectionHeader } from "@/app/ui/section-header";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PriceItemActive } from "@/app/ui/price-item-active";
import { PriceItem } from "@/app/ui/price-item";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Discover the best pricing strategies to maximize your profits and attract more customers. Learn how to set the perfect price point.",
};

export default async function Page() {
  // const pricingPlan = await prisma.pricingPlan.findMany({});
  const pricingPlan = [];
  return (
    <main className="">
      <div className="mt-10">
        <SectionHeader>Price plan</SectionHeader>
        <div className="text-primary font-bold text-lg">
          Credit Never Expires: Your Credits, Your Control
        </div>
        <div className="flex justify-center">
          <Link
            href="https://app.catchallverifier.com/"
            className="bg-primary text-white w-full max-w-sm rounded-full py-3 text-sm mt-5 mb-5 block"
          >
            Pay as you go
          </Link>
        </div>
        <div className="flex justify-center">
          {/* <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:max-w-screen-lg gap-x-4 my-10">
            {pricingPlan
              .sort((a, b) => a.credit - b.credit)
              .map((p, index) => {
                if (index == 2) {
                  return (
                    <PriceItemActive
                      key={p.id}
                      credit={p.credit.toLocaleString()}
                      price={`$${p.price / 100}`}
                      mostPopularOnLeft
                    />
                  );
                } else {
                  return (
                    <PriceItem
                      key={p.id}
                      credit={p.credit.toLocaleString()}
                      price={`$${p.price / 100}`}
                    />
                  );
                }
                // return (
                //   <PriceItem
                //     key={p.id}
                //     credit={p.credit.toLocaleString()}
                //     price={`$${p.price / 100}`}
                //   />
                // );
              })}
          </div> */}
        </div>
      </div>
    </main>
  );
}
