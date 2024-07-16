import { SectionHeader } from "@/app/ui/section-header";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PriceItemActive } from "./price-item-active";
import { PriceItem } from "./price-item";

export const dynamic = "force-dynamic";

export async function HomePricing() {
  // const pricingPlan = await prisma.pricingPlan.findMany({});
  return (
    <main className="">
      <div className="mt-10">
        <SectionHeader>Price plan</SectionHeader>
        <div className="text-primary font-bold text-lg mx-4">
          Credit Never Expires: Your Credits, Your Control
        </div>
        <div className="flex justify-center mx-4">
          <Link
            href="https://app.catchallverifier.com/"
            className="bg-primary text-white px-5 w-full md:w-40 max-w-sm rounded-full py-3 text-sm mt-5 block"
          >
            Pay as you go
          </Link>
        </div>
        <div className="lg:flex lg:justify-center scroll-mx-11 overflow-x-auto lg:overflow-x-visible px-4 py-10 lg:p-10 scrollbar-none">
          <div className="md:max-w-screen-lg md:min-w-max ">
            {/* <div className="w-full md:grid md:grid-cols-3  gap-x-4">
              {pricingPlan
                .sort((a, b) => a.credit - b.credit)
                .slice(1, 4)
                .map((p, index) => {
                  if (index == 1) {
                    return (
                      <PriceItemActive
                        key={p.id}
                        credit={p.credit.toLocaleString()}
                        price={`$${p.price / 100}`}
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
                })}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
