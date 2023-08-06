"use client";
import { AnimatedList, AnimatedItemList } from "@/app/_animations";
import { SanityProject } from "@/sanity/types";
import { scrollIntoView } from "@/app/_utils/scrollIntoView";
import Section from "@/app/_components/layout/Section";
import Title from "../../_components/typography/Title";
import Button from "../../_components/common/Button";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: SanityProject[];
};

export default function Projects({ projects }: Props) {
  return (
    <Section className="flex flex-col justify-center items-center px-4 md:mb-24 md:px-8">
      <div className="w-full flex flex-wrap gap-8 justify-between items-center mb-10 md:mb-14">
        <Title text="Projets" as="h2" />
        <Button
          text="contacte moi"
          as="button"
          onClick={(): void => scrollIntoView("#contact")}
        />
      </div>
      <AnimatedList className="w-full flex flex-wrap justify-center min-[1190px]:justify-between items-center gap-10  md:gap-x-7 md:gap-y-16">
        {projects.map((project, index) => (
          <AnimatedItemList key={index}>
            <ProjectCard project={project} />
          </AnimatedItemList>
        ))}
      </AnimatedList>
    </Section>
  );
}
