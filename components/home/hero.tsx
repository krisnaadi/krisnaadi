"use server";

import { createClient } from "@/utils/supabase/server";
import LinksGrid from "../hero/LinksGrid";

export default async function Hero() {
  const supabase = createClient();
  const {
    data: links,
  }: { data: { id: number; url: string; title: string }[] | null } =
    await supabase.from("links").select();

  return (
    <section>
      <h1>Full-stack Developer</h1>
      <p>
        I strive to write clean, maintainable, and understandable code, ensuring
        a smooth and enjoyable development experience.
      </p>
      <LinksGrid links={links} /> {/* Pass the links to the Client Component */}
    </section>
  );
}
