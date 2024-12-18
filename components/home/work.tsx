"use server";

import { createClient } from "@/utils/supabase/server";

export default async function Work() {
  const supabase = createClient();
  const { data: works } = await supabase.from("works").select().order('id', { ascending: true });
  return (
    <section>
      <h2>Work</h2>
      <table>
        <tbody>
          {works?.map((work) => (
            <tr key={work.id}>
              <td>{work.years}</td>
              <td>{work.company}</td>
              <td>{work.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
