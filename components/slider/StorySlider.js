import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { storyTemplates } from "../../mockdata/storyTemplates";
const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 4,

  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};

export default function StorySlider() {
 
  return (
    <>
      <Swiper {...swiperOptions} className="reviews-1-wrapper">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* TESTIMONIAL #1 */}
        {storyTemplates.map((template) => (
          <SwiperSlide className="review-card ">
            <div key={template.id} id="l-1">
              <div className="hover-overlay1 card-view">
                <img
                  className="img-fluid"
                  src={template.backgroundImage}
                  alt="layout-preview"
                />
                <div className="text-container">
                  <div className="text-wow">
                    <Link href={template.design} target="_blank">
                      Go with this design
                    </Link>{" "}
                  </div>
                  <div className="text-wow">
                    <Link href={template.preview} target="_blank">
                      preview Design
                    </Link>
                  </div>
                </div>
                <p className="payment-type">{template.type}</p>
              </div>
              <h4> {template.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
