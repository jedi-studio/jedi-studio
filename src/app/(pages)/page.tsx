import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-65px)] dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="flex max-w-[440px] flex-col items-center gap-12">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <div>
            <h1
              data-aos-delay="800"
              data-aos="fade-up"
              className="landing-headline text-center rtl:leading-normal sm:text-3xl dark:text-gray-300"
            >
              JEDI Studio
            </h1>
            <p
              data-aos-delay="900"
              data-aos="fade-up"
              className="text-center text-gray-600 landing-para dark:text-gray-300"
            >
              Just another somthing doesnt have any thing :(
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div
          data-aos-delay="1100"
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-full gap-4 mt-4 sm:gap-2 sm:flex-row"
        >
          <Button href="/contact" className="w-full mx-3" as={Link} variant="shadow">
            Contact With Us
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 w-[100vw] overflow-clip">
        <Image
          src={"/hero-bg.webp"}
          decoding="async"
          sizes="(max-width: 1200px) 1x,(max-width: 3840px) 2x"
          fetchPriority="high"
          width={1131}
          height={739}
          alt={"bg-min"}
          priority={true}
        />
      </div>
    </section>
  );
}
