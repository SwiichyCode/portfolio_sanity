import { draftMode } from "next/headers";
import { cachedClient } from "@/sanity/lib/client";
import { getCachedClient } from "@/sanity/lib/getClient";
import { stackQuery, projectQuery } from "@/sanity/lib/queries";
import Header from "../_components/layout/Header";
import Hero from "./_components/Hero";
import Stacks from "./_components/Stacks";
import Projects from "./_components/Projects";
import Footer from "../_components/layout/Footer";
import PreviewProvider from "../_components/PreviewProvider";
import PreviewTasks from "../_components/PreviewTasks";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN }
    : undefined;
  const stacks = await getCachedClient(preview)(stackQuery);
  const projects = await cachedClient(projectQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewTasks stacks={stacks} />
      </PreviewProvider>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Stacks stacks={stacks} />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}
