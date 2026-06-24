import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { getGroup, getPage } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGroup("producto").items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getPage("producto", slug);
  if (!data) return {};
  return {
    title: data.title.replace("|", "").trim(),
    description: data.lead,
    alternates: { canonical: `/producto/${slug}` },
  };
}

export default async function ProductoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getPage("producto", slug);
  if (!data) notFound();
  return <DetailPageView data={data} />;
}
