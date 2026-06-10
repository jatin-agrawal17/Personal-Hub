"use client";

import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function GitHubStatsSection() {
  const blogs = [
    {
      title: "Inside Neural Networks: Understanding Loss and Activation",
      description:
        "Explore how neural networks learn from mistakes and make complex decisions using loss and activation functions.",
      date: "Jul 19, 2025",
      image: "/blogs/loss-activation.png",
      link: "https://medium.com/@agrawaljatin405/inside-neural-networks-understanding-loss-and-activation-c1d7fbccc938",
    },
    {
      title: "Perceptron: The Brain of AI",
      description:
        "A beginner-friendly guide to understanding the perceptron and how it forms the foundation of neural networks.",
      date: "Jul 17, 2025",
      image: "/blogs/perceptron.png",
      link: "https://medium.com/@agrawaljatin405/perceptron-the-brain-of-ai-1cc29d655998",
    },
  ];

  return (
    <section id="github-stats" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Blogs
              </div>

              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Latest Articles
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sharing my learning journey in Machine Learning, Deep Learning,
                and Software Development.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="max-w-5xl mx-auto grid gap-6">
          {blogs.map((blog, index) => (
            <BlurFade
              key={blog.title}
              delay={BLUR_FADE_DELAY * (21 + index)}
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <div className="grid md:grid-cols-[1fr_250px] gap-6 p-6">
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {blog.date}
                      </p>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground">
                        {blog.description}
                      </p>
                    </div>

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-44 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}