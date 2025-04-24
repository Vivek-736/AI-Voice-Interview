/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import InterviewCard from "@/components/InterviewCard";
import SkeletonCard from "@/components/SkeletonCard";

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpComingInterviews = (latestInterviews?.length ?? 0) > 0;

  return (
    <>
      <section className="card-cta bg-gradient-to-br from-blue-900 to-black via-slate-900 border-2 border-blue-600">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            The AI-powered mock interview platform built for engineering
            students to ace tech interviews.
          </h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button
            asChild
            variant="secondary"
            className="w-fit !bg-purple-500 !text-white hover:!bg-purple-500/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10 max-sm:w-full"
          >
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
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="flex flex-wrap gap-12 justify-center items-center text-neutral-400">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="md:flex hidden flex-col gap-2 items-center">
                  <SkeletonCard />
                  <p className="text-sm italic">Ready when you are 👊</p>
                </div>
              ))}
              <p className="md:hidden flex items-center justify-center flex-col gap-2">
                You have no past interviews. <br />
                <Link href="/interview" className="text-blue-500">
                  Start an Interview
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
        <div className="interviews-section">
          {hasUpComingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
