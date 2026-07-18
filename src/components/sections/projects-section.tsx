import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data/projects";
import {
  NexuBankMockup,
  LogiSmartMockup,
} from "@/components/sections/project-mockups";

const mockupByKind = {
  mobile: NexuBankMockup,
  dashboard: LogiSmartMockup,
};

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background py-32">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile md:px-margin-desktop">
        <Reveal className="mb-16">
          <h2 className="font-display text-headline-lg mb-4">
            Dibikin buat Selesaikan Masalah Nyata
          </h2>
          <p className="text-body-lg text-secondary">
            Bukan cuma jadi terus dipajang. Tiap proyek dibikin biar beneran kepake.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => {
            const Mockup = mockupByKind[project.kind];
            return (
              <Reveal key={project.title} delay={index * 100} className="group">
                <Mockup />
                <div className="mb-4 mt-6 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container-low px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display mb-2 text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-body-md mb-4 text-secondary">
                  {project.description}
                </p>
                <div className="flex gap-4 text-sm text-secondary">
                  {project.techs.map((tech) => (
                    <span key={tech} className="flex items-center gap-1 font-medium">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
