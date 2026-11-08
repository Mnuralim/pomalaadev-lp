import { Briefcase, Building2, GraduationCap, Store } from "lucide-react";

const audiences = [
  { icon: Building2, label: "Perusahaan" },
  { icon: Store, label: "UMKM" },
  { icon: GraduationCap, label: "Mahasiswa" },
  { icon: Briefcase, label: "Pencari kerja" },
];

export function AudienceSection() {
  return (
    <section className="border-y border-border-subtle bg-surface">
      <div className="mx-auto flex max-w-(--container-max-width) flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl font-semibold">
          Biasanya yang datang ke kami:
        </p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {audiences.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 border border-border-subtle px-4 py-2"
            >
              <Icon size={18} strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
