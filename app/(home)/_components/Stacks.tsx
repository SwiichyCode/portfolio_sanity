"use client";
import Image from "next/image";
import { SanityStack } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import { AnimatedList, AnimatedItemList } from "@/app/_animations";
import Section from "@/app/_components/layout/Section";
import Paragraph from "@/app/_components/typography/Paragraph";
import Title from "@/app/_components/typography/Title";

type Props = {
  stacks: SanityStack[];
};

export default function Stacks({ stacks }: Props) {
  return (
    <Section className="border-t-[1px] border-b-[1px] border-primary-grey py-10 md:mb-0 md:py-10 md:px-4 md:border-b-0 lg:py-24">
      <AnimatedList className="flex flex-col justify-center items-center text-center gap-6 px-4 md:flex-row md:flex-wrap md:justify-center md:text-left md:gap-12 md:mb-24">
        {stacks.map(({ language, years, icon }, index) => (
          <AnimatedItemList
            key={index}
            className="flex items-center md:w-full md:max-w-[245px] lg:max-w-[345px] gap-4"
          >
            {icon ? (
              <Image
                src={urlForImage(icon).url()}
                alt="icon"
                width={48}
                height={48}
                className="hidden md:block"
              />
            ) : null}
            <div>
              <Title
                text={language}
                as="h3"
                className="font-bold text-3xl leading-10 tracking-[-1px]"
              />
              <Paragraph
                text={`${years} an${years > 1 ? "s" : ""} d'expérience`}
                className="font-medium text-base leading-6 text-primary-grey"
              />
            </div>
          </AnimatedItemList>
        ))}
      </AnimatedList>
    </Section>
  );
}
