import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const templates = [
    {
      id: 1,
      name: "Story 1",
      backgroundImage: "images/stories/story-1.png",
      design:
        "https://cloud.contentql.io/share/9BWPPaM24pMkckz",
      preview: "https://storycreative.resonateaes.com/",
      type: "pro",
    },
    {
      id: 2,
      name: "Story 2",
      backgroundImage: "images/stories/story-2.png",
      design:
        "https://cloud.contentql.io/share/1Qmek7PtdLOTe1a",
      preview: "https://storybistromenu.resonateaes.com/",
      type: "pro",
    },
    {
      id: 3,
      name: "Story 3",
      backgroundImage: "images/stories/story-3.png",
      design:
        "https://cloud.contentql.io/share/VUwtIbZBfqfxbTM",
      preview: "https://storyfashion.resonateaes.com/",
      type: "pro",
    },
    {
      id: 4,
      name: "Story 4",
      backgroundImage: "images/stories/story-4.png",
      design:
        "https://cloud.contentql.io/share/5sqq8HNBQ8C7nob",
      preview: "https://storyfreelancer.resonateaes.com/",
      type: "pro",
    },
    {
      id: 5,
      name: "Story 5",
      backgroundImage: "images/stories/story-5.png",
      design:
        "https://cloud.contentql.io/share/iLyNBckvuauebiS",
      preview: "https://storygreatideas.resonateaes.com/",
      type: "pro",
    },
    {
      id: 6,
      name: "Story 6",
      backgroundImage: "images/stories/story-6.png",
      design:
        "https://cloud.contentql.io/share/60Thcfo0gtwe4fX",
      preview: "https://storyhandymen.resonateaes.com/",
      type: "pro",
    },
    {
      id: 7,
      name: "Story 7",
      backgroundImage: "images/stories/story-7.png",
      design:
        "https://cloud.contentql.io/share/G2lezC02HrF8PBI",
      preview: "https://storynightjam.resonateaes.com/",
      type: "pro",
    },
    {
      id: 8,
      name: "Story 8",
      backgroundImage: "images/stories/story-8.png",
      design:
        "https://cloud.contentql.io/share/UWtIvbq8Hir6tGs",
      preview: "https://storywatchpicks.resonateaes.com/",
      type: "pro",
    },
    {
      id: 9,
      name: "Story 9",
      backgroundImage: "images/stories/story-9.png",
      design:
        "https://cloud.contentql.io/share/6sMHIwnTFZbig5E",
      preview: "https://storydietplan.resonateaes.com/",
      type: "pro",
    },
    {
      id: 10,
      name: "Story 10",
      backgroundImage: "images/stories/story-10.png",
      design:
        "https://cloud.contentql.io/share/lo5awDxYMoxdfCu",
      preview: "https://story10places.resonateaes.com/",
      type: "pro",
    },
    {
      id: 11,
      name: "Story 11",
      backgroundImage: "images/stories/story-11.png",
      design:
        "https://cloud.contentql.io/share/FOqXkto4UIi6Yga",
      preview: "https://storydetoxplan.resonateaes.com/",
      type: "pro",
    },
    {
      id: 12,
      name: "Story 12",
      backgroundImage: "images/stories/story-12.png",
      design:
        "https://cloud.contentql.io/share/tQ0gCk8qZ9bVAWa",
      preview: "https://storycv.resonateaes.com/",
      type: "pro",
    },
    {
      id: 13,
      name: "Story 13",
      backgroundImage: "images/stories/story-13.png",
      design:
        "https://cloud.contentql.io/share/aneJjqiqed93vSm",
      preview: "https://storydiscount.resonateaes.com/",
      type: "pro",
    },
    {
      id: 14,
      name: "Story 14",
      backgroundImage: "images/stories/story-14.png",
      design:
        "https://cloud.contentql.io/share/aShyBNabF0LHNHC",
      preview: "https://storyblockbusters.resonateaes.com/",
      type: "pro",
    },
    {
      id: 15,
      name: "Story 15",
      backgroundImage: "images/stories/story-15.png",
      design:
        "https://cloud.contentql.io/share/QAnFAXTZKLLCvri",
      preview: "https://storyhomework.resonateaes.com/",
      type: "pro",
    },
    {
      id: 16,
      name: "Story 16",
      backgroundImage: "images/stories/story-16.png",
      design:
        "https://cloud.contentql.io/share/B9ohtIDInKjZxtE",
      preview: "https://storyfriday.resonateaes.com/",
      type: "pro",
    },
    {
      id: 17,
      name: "Story 17",
      backgroundImage: "images/stories/story-17.png",
      design:
        "https://cloud.contentql.io/share/NijBwaQ1dJqTd5M",
      preview: "https://storyonboarding.resonateaes.com/",
      type: "pro",
    },
    {
      id: 18,
      name: "Story 18",
      backgroundImage: "images/stories/story-18.png",
      design:
        "https://cloud.contentql.io/share/JaYm3Jei9OJO55c",
      preview: "https://storywedding.resonateaes.com/",
      type: "pro",
    },
    {
      id: 19,
      name: "Story 19",
      backgroundImage: "images/stories/story-19.png",
      design:
        "https://cloud.contentql.io/share/V7uIXl4LG9pC2CT",
      preview: "https://storybali.resonateaes.com/",
      type: "pro",
    },
    {
      id: 20,
      name: "Story 20",
      backgroundImage: "images/stories/story-20.png",
      design:
        "https://cloud.contentql.io/share/xNglud2ueH3jelp",
      preview: "https://storypodcast.resonateaes.com/",
      type: "pro",
    },
    {
      id: 21,
      name: "Story 21",
      backgroundImage: "images/stories/story-21.png",
      design:
        "https://cloud.contentql.io/share/GZXDtBC8345wAWc",
      preview: "https://storydesign.resonateaes.com/",
      type: "pro",
    },
    {
      id: 22,
      name: "Story 22",
      backgroundImage: "images/stories/story-22.png",
      design:
        "https://cloud.contentql.io/share/rwxAVn28ecKvNFj",
      preview: "https://storysingapore.resonateaes.com/",
      type: "pro",
    },
    {
      id: 23,
      name: "Story 23",
      backgroundImage: "images/stories/story-23.png",
      design:
        "https://cloud.contentql.io/share/UMorQbikilF7Cz2",
      preview: "https://storybirthday.resonateaes.com/",
      type: "pro",
    },
    {
      id: 24,
      name: "Story 24",
      backgroundImage: "images/stories/story-24.png",
      design:
        "https://cloud.contentql.io/share/FoCGPIJbi5ZEWO8",
      preview: "https://storychristmas.resonateaes.com/",
      type: "pro",
    },
    {
      id: 25,
      name: "Story 25",
      backgroundImage: "images/stories/story-25.png",
      design:
        "https://cloud.contentql.io/share/FRh6IH3lq7RTrVr",
      preview: "https://storyapp.resonateaes.com/",
      type: "pro",
    },
    {
      id: 26,
      name: "Story 26",
      backgroundImage: "images/stories/story-26.png",
      design:
        "https://cloud.contentql.io/share/UAeDzMqzRfWNAKs",
      preview: "https://storycarwash.resonateaes.com/",
      type: "pro",
    },
    {
      id: 27,
      name: "Story 27",
      backgroundImage: "images/stories/story-27.png",
      design:
        "https://cloud.contentql.io/share/OKZeC1CZ9h8nNdi",
      preview: "https://storylawyerup.resonateaes.com/",
      type: "pro",
    },
    {
      id: 28,
      name: "Story 28",
      backgroundImage: "images/stories/story-28.png",
      design:
        "https://cloud.contentql.io/share/D7LEl7J3ITL87e1",
      preview: "https://storycoaching.resonateaes.com/",
      type: "pro",
    },
    {
      id: 29,
      name: "Story 29",
      backgroundImage: "images/stories/story-29.png",
      design:
        "https://cloud.contentql.io/share/0SxLegkm05CiRBx",
      preview: "https://storyhalloween.resonateaes.com/",
      type: "pro",
    },
    {
      id: 30,
      name: "Story 30",
      backgroundImage: "images/stories/story-30.png",
      design:
        "https://cloud.contentql.io/share/etKcSI8loUsVNZn",
      preview: "https://storyconcert.resonateaes.com/",
      type: "pro",
    },
  ];
  return (
    <>
      <Swiper {...swiperOptions} className="reviews-1-wrapper">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* TESTIMONIAL #1 */}
        {templates.map((template) => (
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
