"use client";

import { getClient } from "@/sanity/lib/getClient";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  token: string;
};

export default function PreviewProvider({ children, token }: Props) {
  const client = useMemo(() => getClient({ token }), [token]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
