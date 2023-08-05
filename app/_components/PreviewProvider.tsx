"use client";
import { getClient } from "@/sanity/lib/getClient";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { useMemo } from "react";
import Header from "./layout/Header";
import Hero from "../(home)/_components/Hero";
import Footer from "./layout/Footer";

type Props = {
  children: React.ReactNode;
  token: string;
};

export default function PreviewProvider({ children, token }: Props) {
  const client = useMemo(() => getClient({ token }), [token]);
  return (
    <LiveQueryProvider client={client}>
      <Header />
      <Hero />
      {children}
      <Footer />
    </LiveQueryProvider>
  );
}
