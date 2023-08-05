"use client";
import Section from "@/app/_components/layout/Section";
import Paragraph from "../../_components/typography/Paragraph";
import Button from "../../_components/common/Button";
import { scrollIntoView } from "@/app/_utils/scrollIntoView";

export default function Hero() {
  return (
    <Section className="flex flex-col justify-center items-center text-center gap-6 px-4 md:items-start md:text-left md:gap-14 md:px-8 md:mb-14">
      <h1 className=" font-bold text-[40px] leading-10 tracking-[-1.13636px] md:flex md:flex-col md:gap-2">
        Enchanté ! Je m&apos;appelle{" "}
        <span className="underline decoration-primary-green md:text-[72px] md:leading-[72px] md:tracking-[-2.04545px] lg:text-[88px] lg:leading-[88px]">
          Dylan Jansana.
        </span>
      </h1>
      <div className="flex flex-col items-center gap-6 md:items-start">
        <Paragraph
          text="Je réside en France, je suis un développeur front-end passionné par la création d'applications web attrayantes et conviviales."
          className="w-full max-w-[445px]"
        />
        <Button
          text="contacte moi"
          as="button"
          onClick={(): void => scrollIntoView("#contact")}
        />
      </div>
    </Section>
  );
}
