"use client"; // ⬅️ now this page can use state & event handlers

import { useState } from "react";
import Navbar from "../components/NavBar";
import Card from "./Card";
import Button from "./Button";

export default function Home() {
  const [cards, setCards] = useState<number[]>([]);

  const addCard = () => {
    setCards([...cards, cards.length + 1]);
  };

  return (
    <main>
      <Navbar />
      <Button onAddCard={addCard} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-3 gap-2 w-full bg-gray-50">
        {cards.map((id) => (
          <Card key={id} />
        ))}
      </div>
    </main>
  );
}
