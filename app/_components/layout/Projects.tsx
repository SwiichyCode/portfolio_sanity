"use client";
import Title from "../typography/Title";
import Button from "../common/Button";
import ProjectCard from "./ProjectCard";
import { AnimatedList, AnimatedItemList } from "@/app/_animations";
import { SanityProject } from "@/sanity/types";

type Props = {
  projects: SanityProject[];
};

export default function Projects({ projects }: Props) {
  return (
    <section className="flex flex-col justify-center items-center px-4 md:mb-24 md:px-8 lg:w-full lg:max-w-section">
      <header className="w-full flex justify-between items-center mb-10 md:mb-14">
        <Title text="Projects" as="h2" />
        <Button text="contact me" as="button" />
      </header>
      <AnimatedList className="w-full flex flex-wrap justify-center min-[1190px]:justify-between items-center gap-10  md:gap-x-7 md:gap-y-16">
        {projects.map((project, index) => (
          <AnimatedItemList key={index}>
            <ProjectCard project={project} projectsLength={projects.length} />
          </AnimatedItemList>
        ))}
      </AnimatedList>
    </section>
  );
}
