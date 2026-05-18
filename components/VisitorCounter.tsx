"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "hadjer-election-2026";
const KEY = "visitors";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then((res) => res.json())
      .then((data: { value: number }) => setCount(data.value))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="text-xs text-gray-400">
      👀 {count.toLocaleString("fr-FR")} visiteurs depuis le lancement
    </span>
  );
}
