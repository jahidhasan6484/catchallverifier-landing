import { Footer } from "@/app/ui/footer";
import { TopNavBar } from "@/app/ui/top-nav-bar";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={outfit.className}>
      <TopNavBar />
      <div className="text-center sm:mx-16 md:mx-16 mt-24 flex justify-center">
        <div className="max-w-screen-2xl">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
