import { ItemType } from "../types";

function Stats({ items }: { items: ItemType[] }) {
  // early return
  if (!items.length)
    return (
      <footer className="stats">
        <em>📃 Start adding some items in your packing list</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything ready to go ✈️"
          : ` 🧳 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
