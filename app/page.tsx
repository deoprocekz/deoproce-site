
'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch('/catalog.json')
      .then((res) => res.json())
      .then(setCatalog);
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-600">Продукция Deoproce</h1>
      {catalog.map((cat) => (
        <section key={cat.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{cat.category}</h2>
          <ul className="grid gap-4">
            {cat.products.map((p) => (
              <li key={p} className="p-4 bg-white rounded-2xl shadow flex justify-between items-center">
                <span>{p}</span>
                <a href={`https://wa.me/77053664088?text=Хочу заказать: ${encodeURIComponent(p)}`} target="_blank" className="text-sm px-3 py-1 border border-yellow-600 rounded-full text-yellow-600 hover:bg-yellow-50">Заказать</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
