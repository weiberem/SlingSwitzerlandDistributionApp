import { notFound } from "next/navigation";
import { aircraft, getAircraftById } from "@/data/aircraft";
import AircraftDetailClient from "./AircraftDetailClient";

export function generateStaticParams() {
  return aircraft.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plane = getAircraftById(id);
  if (!plane) return { title: "Nicht gefunden" };

  return {
    title: `${plane.name} - ${plane.tagline}`,
    description: plane.description,
  };
}

export default async function AircraftDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plane = getAircraftById(id);
  if (!plane) notFound();

  return <AircraftDetailClient aircraft={plane} />;
}
