import Image from "next/image";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import Title from "../../_components/typography/Title";
import Button from "../../_components/common/Button";

type Props = {
  project: SanityProject;
};

export default function ProjectCard({ project }: Props) {
  const { title, stack, images, liveUrl, githubUrl } = project;

  return (
    <article
      className={`relative w-full flex flex-col gap-5 [&:hover>.links]:md:flex [&:hover>.links]:md:flex-col [&:hover>img]:md:opacity-30 `}
    >
      {images && (
        <Image
          src={urlForImage(images[0]).auto("format").fit("max").url()}
          alt={title}
          width={540}
          height={540}
          className="cursor-pointer transition-all duration-200 ease-in-out mix-blend-normal"
        />
      )}
      <div className="flex flex-col gap-4 md:gap-0">
        <Title text={title} as="h4" />
        <ul className="flex flex-wrap gap-4">
          {stack &&
            stack.map(({ language }, index) => (
              <li
                key={index}
                className="font-medium text-lg leading-6 text-primary-grey"
              >
                {language}
              </li>
            ))}
        </ul>
      </div>
      <div className="links flex items-center gap-7 md:hidden md:absolute top-[40%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Button as="a" href={liveUrl} text="view project" />
        <Button as="a" href={githubUrl} text="view code" />
      </div>
    </article>
  );
}
