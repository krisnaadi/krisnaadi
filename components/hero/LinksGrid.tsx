"use client"; // This directive is important for client-side interactivity

type LinksGridProps = {
  links: { id: number; url: string; title: string }[] | null;
};

export default function LinksGrid({ links }: LinksGridProps) {
  function handleClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="grid">
      {links?.map((link) => (
        <button key={link.id} onClick={() => handleClick(link.url)}>
          {link.title}
        </button>
      ))}
    </div>
  );
}
