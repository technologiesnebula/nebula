import type { Metadata } from "next";
import { GroupOverview } from "@/components/sections/GroupOverview";
import { getGroup } from "@/lib/pages";

const group = getGroup("compania");

export const metadata: Metadata = {
  title: "Compañía",
  description: group.blurb,
  alternates: { canonical: "/compania" },
};

export default function CompaniaPage() {
  return <GroupOverview group={group} />;
}
