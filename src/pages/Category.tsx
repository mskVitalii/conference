import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const projects = [
  { name: "Проект 1", path: `project1` },
  { name: "Проект 2", path: `project2` },
  { name: "Проект 3", path: `project3` },
  { name: "Проект 4", path: `project4` },
  { name: "Проект 5", path: `project5` }
];

function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  console.log(category, `${category}${projects[1].path}`);

  const [show, setShow] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );

  useEffect(() => {
    console.log("useEffect");
    projects.forEach((_, index) => {
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
      <div className="flex items-stretch justify-center flex-wrap content-center gap-4 p-4">
        {projects.map((project, index) => (
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
                  <Link to={`/${category}/${project.path}`}>
                    {project.name}
                  </Link>
                </div>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
