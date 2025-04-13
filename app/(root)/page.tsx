import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function Home() {
  return (
    <>
      <section className="card-cta bg-gradient-to-br from-blue-900 to-black via-slate-900 border-2 border-blue-600">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Preparation & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild variant={"secondary"} className="w-fit !bg-purple-500 !text-white hover:!bg-purple-500/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10 max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/hero.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        {/* Will do later */}
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {/* Will do later */}
        </div>
      </section>
    </>
  );
}

export default Home;
