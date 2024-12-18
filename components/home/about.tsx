"use server";

import { createClient } from "@/utils/supabase/server";

export default async function About() {
  const supabase = createClient();
  const { data: toolsets } = await supabase.from("toolsets").select();
  return (
    <section>
      <h2>About</h2>
      <p>
        Hello! I&apos;m Krisnaadi Suastika, a full-stack developer. More than 5
        year experience
      </p>
      <ul>
        {toolsets?.map((toolset) => (
          <li key={toolset.id}>
            <h3>{toolset.title}</h3>
            <p>{toolset.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
