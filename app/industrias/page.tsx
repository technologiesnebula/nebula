import type { Metadata } from "next";
import { GroupOverview } from "@/components/sections/GroupOverview";
import { getGroup } from "@/lib/pages";

const group = getGroup("industrias");

export const metadata: Metadata = {
  title: "Industrias",
  description: group.blurb,
  alternates: { canonical: "/industrias" },
};

export default function IndustriasPage() {
  return <GroupOverview group={group} />;
}
