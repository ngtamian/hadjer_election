"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "hadjer-election-2026";
const KEY = "visitors";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`)
      .then((res) => res.json())
      .then((data: { count: number }) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="text-xs text-gray-400">
      👀 {count.toLocaleString("fr-FR")} visiteurs depuis le lancement
    </span>
  );
}
