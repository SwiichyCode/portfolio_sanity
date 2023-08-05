import { cachedClient } from "@/sanity/lib/client";
import { stackQuery, projectQuery } from "@/sanity/lib/queries";
import Header from "../_components/layout/Header";
import Hero from "./_components/Hero";
import Stacks from "./_components/Stacks";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default async function Home() {
  const stacks = await cachedClient(stackQuery);
  const projects = await cachedClient(projectQuery);

  return (
    <>
      <Header />
      <Hero />
      <Stacks stacks={stacks} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}
