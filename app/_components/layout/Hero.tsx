"use client";
import Paragraphe from "../typography/Paragraphe";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center color-white gap-6 px-4 md:items-start md:text-left md:gap-14 md:px-8 md:mb-14 lg:max-w-section lg:w-full">
      <h1 className=" font-bold text-[40px] leading-10 tracking-[-1.13636px] md:flex md:flex-col md:gap-2">
        Nice to meet you! I’m{" "}
        <span className="underline decoration-primary-green md:text-[72px] md:leading-[72px] md:tracking-[-2.04545px] lg:text-[88px] lg:leading-[88px]">
          Dylan Jansana.
        </span>
      </h1>
      <div className="flex flex-col items-center gap-6 md:items-start">
        <Paragraphe
          text="Based in France, I’m a front-end developer passionate about
          building accessible web apps that users love."
          className="w-full max-w-[445px]"
        />
        <Button
          text="contact me"
          as="button"
          onClick={() => console.log("test")}
        />
      </div>
    </section>
  );
}
