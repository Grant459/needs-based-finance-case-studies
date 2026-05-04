export type OnThisPageItem = {
  id: string;
  label: string;
};

export default function OnThisPageNav({ items }: { items: OnThisPageItem[] }) {
  return (
    <aside className="on-this-page" aria-labelledby="on-this-page-heading">
      <h2 id="on-this-page-heading">On this page</h2>
      <nav aria-label="Article sections">
        {items.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
