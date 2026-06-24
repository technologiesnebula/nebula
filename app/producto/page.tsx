import type { Metadata } from "next";
import { GroupOverview } from "@/components/sections/GroupOverview";
import { getGroup } from "@/lib/pages";

const group = getGroup("producto");

export const metadata: Metadata = {
  title: "Producto",
  description: group.blurb,
  alternates: { canonical: "/producto" },
};

export default function ProductoPage() {
  return <GroupOverview group={group} />;
}
