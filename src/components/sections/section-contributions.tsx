"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HorizontalProjectCard } from "@/components/horizontal-project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function TeachingAssistantSection() {
  return (
    <section id="teaching-assistantships" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Teaching
              </div>

              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Teaching Assistantships
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                Teaching, mentoring, and helping students build strong
                foundations in engineering and computer science subjects.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-8 max-w-[1000px] mx-auto">
          {DATA.contributions?.map((ta, id) => (
            <BlurFade
              key={ta.title}
              delay={BLUR_FADE_DELAY * 19 + id * 0.05}
            >
              <HorizontalProjectCard
                href="#"
                title={ta.title}
                description={ta.description}
                features={ta.features}
                dates={ta.dates}
                tags={ta.technologies}
                image=""
                video=""
                links={ta.links}
                badgeText="TA"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}