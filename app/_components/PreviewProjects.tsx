"use client";
import { useLiveQuery } from "@sanity/preview-kit";
import { projectQuery } from "@/sanity/lib/queries";
import { SanityProject } from "@/sanity/types";
import Projects from "../(home)/_components/Projects";

export default function PreviewProjects({
  projects = [],
}: {
  projects: SanityProject[];
}) {
  const [data] = useLiveQuery(projects, projectQuery);

  return <Projects projects={data} />;
}
