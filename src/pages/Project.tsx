import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Mousewheel, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProjectPage() {
  const mainSwiperRef = useRef<any>(null);
  const { category, project } = useParams<{
    category: string;
    project: string;
  }>();
  console.log(category, project);

  const slides = [
    { id: 1, color: "#FF5733", title: "Slide 1" },
    { id: 2, color: "#33FF57", title: "Slide 2" },
    { id: 3, color: "#3357FF", title: "Slide 3" },
    { id: 4, color: "#F3FF33", title: "Slide 4" }
  ];
  const handleSlideClick = (index: number) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="min-h-screen relative flex">
      <aside className="w-1/4 p-4 bg-gray-800 text-white">
        <h2 className="text-xl mb-4">Preview</h2>
        <ul>
          {slides.map((slide, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={slide.id}
              className="cursor-pointer mb-2"
              onClick={() => handleSlideClick(index)}
            >
              <div className="p-4" style={{ backgroundColor: slide.color }}>
                {slide.title}
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <main className="h-screen w-3/4 pt-24 lg:pt-0 relative z-0">
        <Swiper
          ref={mainSwiperRef}
          direction={"vertical"}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          mousewheel={true}
          modules={[Pagination, Navigation, Scrollbar, Mousewheel]}
          style={{ height: "100vh" }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ backgroundColor: slide.color }}
            >
              {slide.title}
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default ProjectPage;
