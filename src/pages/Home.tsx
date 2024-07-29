import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const categories = [
  { name: "Новые материалы и металлы", path: "/new-materials" },
  { name: "Системы и агрегаты техники", path: "/systems" },
  { name: "Электроника и информационные технологии", path: "/electronics" },
  { name: "Охрана и физическая защита", path: "/security" },
  { name: "Малая энергетика", path: "/energy" },
  { name: "Здравоохранение", path: "/healthcare" }
];

function HomePage() {
  const [show, setShow] = useState<boolean[]>(
    Array(categories.length).fill(false)
  );
  useEffect(() => {
    categories.forEach((_, index) => {
      setTimeout(
        () => {
          setShow((prev) => {
            const newShow = [...prev];
            newShow[index] = true;
            return newShow;
          });
        },
        (1 + index) * 350
      ); // Adjust the delay as needed
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative"
            style={{ height: "200px", width: "300px" }}
          >
            <Transition
              show={show[index]}
              enter="transition transform ease-out duration-500"
              enterFrom="translate-y-10 opacity-0"
              enterTo="translate-y-0 opacity-100"
            >
              <div className="absolute inset-0">
                <div
                  className="bg-gray-700 text-white p-6 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition-all duration-500"
                  style={{ height: "100%", width: "100%" }}
                >
                  <Link to={category.path}>{category.name}</Link>
                </div>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
