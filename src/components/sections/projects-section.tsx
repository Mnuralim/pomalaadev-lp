import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data/projects";

function SampleTag({ show }: { show?: boolean }) {
  return show ? (
    <span className="text-sm font-normal text-secondary"> (contoh)</span>
  ) : null;
}

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="karya"
      className="mx-auto max-w-(--container-max-width) scroll-mt-20 px-5 py-24"
    >
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight">
          Yang sudah kami kerja.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <Image
            src={featured.image}
            alt={`Tampilan ${featured.title}`}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover"
          />
          <h3 className="mt-4 font-display text-2xl font-bold">
            {featured.title}
            <SampleTag show={featured.sample} />
          </h3>
          <p className="mt-1 text-secondary">{featured.description}</p>
        </Reveal>
        <div className="grid gap-6 md:col-span-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i + 1) * 100}>
              <Image
                src={project.image}
                alt={`Tampilan ${project.title}`}
                width={800}
                height={450}
                className="aspect-video w-full object-cover"
              />
              <h3 className="mt-3 font-display text-lg font-bold">
                {project.title}
                <SampleTag show={project.sample} />
              </h3>
              <p className="mt-1 text-sm text-secondary">{project.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
