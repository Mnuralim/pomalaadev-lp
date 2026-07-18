import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Terminal,
  Layers,
  Database,
  Cpu,
  Sparkles,
  BrainCircuit,
  CloudCog,
  Network,
  Package,
} from "lucide-react";

export interface TechItem {
  name: string;
  icon: LucideIcon;
}

export const techStack: TechItem[] = [
  { name: "Next.js", icon: Terminal },
  { name: "React", icon: Cpu },
  { name: "React Native", icon: Smartphone },
  { name: "TypeScript", icon: Layers },
  { name: "Node.js", icon: Terminal },
  { name: "Laravel", icon: Layers },
  { name: "Prisma", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Package },
  { name: "Redis", icon: CloudCog },
  { name: "OpenAI", icon: Sparkles },
  { name: "Google Gemini", icon: BrainCircuit },
  { name: "Cloudflare", icon: CloudCog },
  { name: "Nginx", icon: Network },
];
