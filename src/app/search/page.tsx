import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SearchBox from "@/components/SearchBox";
import { Section } from "@/components/Bits";
import { buildIndex } from "@/lib/searchIndex";

export const metadata: Metadata = { title: "Search", description: "Search modules, features, industries, guides and more.", robots: { index: false } };

export default function SearchPage() {
  return (
    <>
      <PageHero title="Search" lead="Find a module, a feature, a guide or a word." crumbs={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <Section><SearchBox index={buildIndex()} /></Section>
    </>
  );
}
