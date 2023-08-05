"use client";
import { useLiveQuery } from "@sanity/preview-kit";
import { stackQuery } from "@/sanity/lib/queries";
import { SanityStack } from "@/sanity/types";
import Stacks from "../../(home)/_components/Stacks";

export default function PreviewStacks({
  stacks = [],
}: {
  stacks: SanityStack[];
}) {
  const [data] = useLiveQuery(stacks, stackQuery);

  return <Stacks stacks={data} />;
}
