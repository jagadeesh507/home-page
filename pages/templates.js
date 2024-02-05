// Templates.jsx

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { LiaPlusCircleSolid } from "react-icons/lia";
import Layout from "../components/layout/Layout";
import TemplateFilter from "../components/sections/TemplateFilter";

function Templates() {
  const templates = [
    {
      id: 1,
      name: "Template 1",
      backgroundImage: "images/template/template-1.png",
      design:
        "https://cloud.contentql.io/share/jEbkYNw7BkhmJhe",
      preview: "https://multiworkshop.resonateaes.com/",
      type: "pro",
      category: "Education",
    },
    {
      id: 2,
      name: "Template 2",
      backgroundImage: "images/template/template-2.png",
      design:
        "https://cloud.contentql.io/share/EOaOJKjlMFSNkf7",
      preview: "https://podcastlanding.resonateaes.com/",
      type: "pro",
      category: "Eduction",
    },
    {
      id: 3,
      name: "Template 3",
      backgroundImage: "images/template/template-3.png",
      design:
        "hhttps://cloud.contentql.io/share/4CEwq77n2gMsfFz",
      preview: "https://halbor.resonateaes.com/",
      type: "pro",
      category: "Free",
    },
    {
      id: 4,
      name: "Template 4",
      backgroundImage: "images/template/template-4.png",
      design:
        "https://cloud.contentql.io/share/cSoucHLvrXFxD3d",
      preview: "https://gymtrainer.resonateaes.com/",
      type: "pro",
      category: "Landing",
    },
    {
      id: 5,
      name: "Template 5",
      backgroundImage: "images/template/template-5.png",
      design:
        "https://cloud.contentql.io/share/ql2xg6EMdj8PbPn",
      preview: "https://restauranttemp.resonateaes.com/",
      type: "pro",
      category: "Layouts",
    },
    {
      id: 6,
      name: "Template 6",
      backgroundImage: "images/template/template-6.png",
      design:
        "https://cloud.contentql.io/share/9dLFGHvaGxl0CKa",
      preview: "https://subscriptionsales.resonateaes.com/",
      type: "pro",
      category: "Food",
    },
    {
      id: 7,
      name: "Template 7",
      backgroundImage: "images/template/template-7.png",
      design:
        "https://cloud.contentql.io/share/GSBFKZ7LcFm4yO1",
      preview: "https://saaslandingpages.resonateaes.com/",
      type: "pro",
      category: "Portfolio",
    },
    {
      id: 8,
      name: "Template 8",
      backgroundImage: "images/template/template-8.png",
      design:
        "https://cloud.contentql.io/share/Kt4U5WgQg139CpK",
      preview: "https://portfoliopage.resonateaes.com/",
      type: "pro",
      category: "Portfolio",
    },
    {
      id: 9,
      name: "Template 9",
      backgroundImage: "images/template/template-9.png",
      design:
        "https://cloud.contentql.io/share/naUqIU9tutlxRgd",
      preview: "https://petstore3.resonateaes.com/",
      type: "pro",
      category: "Portfolio",
    },
    {
      id: 10,
      name: "Template 10",
      backgroundImage: "images/template/template-10.png",
      design:
        "https://cloud.contentql.io/share/S6VQNPkMMs2OenJ",
      preview: "https://cleanorz.resonateaes.com/",
      type: "pro",
      category: "Portfolio",
    },
    {
      id: 11,
      name: "Template 11",
      backgroundImage: "images/template/template-11.png",
      design:
        "https://cloud.contentql.io/share/D6MS36UHdohhNUI",
      preview: "https://musictutor.resonateaes.com/",
      type: "pro",
      category: "Portfolio",
    },
    {
      id: 12,
      name: "Template 12",
      backgroundImage: "images/template/template-12.png",
      design:
        "https://cloud.contentql.io/share/wYhJZL9ezfK29DA",
      preview: "https://lounchpodcast.resonateaes.com/",
      type: "pro",
      category: "Travel",
    },
    {
      id: 13,
      name: "Template 13",
      backgroundImage: "images/template/template-13.png",
      design:
        "https://cloud.contentql.io/share/jlyVxySZ5mTUOMp",
      preview: "https://nursery.resonateaes.com/",
      type: "pro",
      category: "Travel",
    },
    {
      id: 14,
      name: "Template 14",
      backgroundImage: "images/template/template-14.png",
      design:
        "https://cloud.contentql.io/share/ipBMapK3EZJrZEB",
      preview: "https://dancetutor.resonateaes.com/",
      type: "pro",
      category: "Travel",
    },
    {
      id: 15,
      name: "Template 15",
      backgroundImage: "images/template/template-15.png",
      design:
        "https://cloud.contentql.io/share/GLCpZRz2Q5AUbLv",
      preview: "https://dojosensei.resonateaes.com/",
      type: "pro",
      category: "Arts",
    },
    {
      id: 16,
      name: "Template 16",
      backgroundImage: "images/template/template-16.png",
      design:
        "https://cloud.contentql.io/share/iBbpRpblD3dxUJF",
      preview: "https://linoor.resonateaes.com/",
      type: "pro",
      category: "Free",
    },
    {
      id: 17,
      name: "Template 17",
      backgroundImage: "images/template/template-17.png",
      design:
        "https://cloud.contentql.io/share/vV9YuIMu8dhQcsN",
      preview: "https://growth2.resonateaes.com/",
      type: "pro",
      category: "Arts",
    },
    {
      id: 18,
      name: "Template 18",
      backgroundImage: "images/template/template-18.png",
      design:
        "https://cloud.contentql.io/share/bc8mWwFIj2gqF21",
      preview: "https://yoganew.resonateaes.com/",
      type: "pro",
      category: "Arts",
    },
    {
      id: 19,
      name: "Template 19",
      backgroundImage: "images/template/template-19.png",
      design:
        "https://cloud.contentql.io/share/v3xPkGNTmPFgPy8",
      preview: "https://trefon.resonateaes.com/",
      type: "pro",
      category: "Sport & Health",
    },
    {
      id: 20,
      name: "Template 20",
      backgroundImage: "images/template/template-20.png",
      design:
        "https://cloud.contentql.io/share/7nSOyGyuh8Zwlp7",
      preview: "https://travely.resonateaes.com/",
      type: "pro",
      category: "Sport & Health",
    },
    {
      id: 21,
      name: "Template 21",
      backgroundImage: "images/template/template-21.png",
      design:
        "https://cloud.contentql.io/share/9q09xWWs6hfYe0T",
      preview: "https://telemed.resonateaes.com/",
      type: "pro",
      category: "Sport & Health",
    },
    {
      id: 22,
      name: "Template 22",
      backgroundImage: "images/template/template-22.png",
      design:
        "https://cloud.contentql.io/share/t5GLqILX60MLjWo",
      preview: "https://tattooshop.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 23,
      name: "Template 23",
      backgroundImage: "images/template/template-23.png",
      design:
        "https://cloud.contentql.io/share/XNyVIKoUIsd7Ezy",
      preview: "https://sushi.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 24,
      name: "Template 24",
      backgroundImage: "images/template/template-24.png",
      design:
        "https://cloud.contentql.io/share/WbRX3PL0Pj8nEAF",
      preview: "https://starter.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 25,
      name: "Template 25",
      backgroundImage: "images/template/template-25.png",
      design:
        "https://cloud.contentql.io/share/jtRHdSoUotIQ4ve",
      preview: "https://skiing.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 26,
      name: "Template 26",
      backgroundImage: "images/template/template-26.png",
      design:
        "https://cloud.contentql.io/share/LxCDRQHAvXVYWaz",
      preview: "https://sintix.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 27,
      name: "Template 27",
      backgroundImage: "images/template/template-27.png",
      design:
        "https://cloud.contentql.io/share/pwCnp7cwdcCd3OQ",
      preview: "https://scooterrental.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 28,
      name: "Template 28",
      backgroundImage: "images/template/template-28.png",
      design:
        "https://cloud.contentql.io/share/q7t69BffTjysBBq",
      preview: "https://safari.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 29,
      name: "Template 29",
      backgroundImage: "images/template/template-29.png",
      design:
        "https://cloud.contentql.io/share/YMUCo49EahdTRjU",
      preview: "https://restaurant3.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 30,
      name: "Template 30",
      backgroundImage: "images/template/template-30.png",
      design:
        "https://cloud.contentql.io/share/6gi8PkPDyWK7Z7P",
      preview: "https://realtalk.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 31,
      name: "Template 31",
      backgroundImage: "images/template/template-31.png",
      design:
        "https://cloud.contentql.io/share/ZM51qkCpg8qrVdk",
      preview: "https://ranafoxa.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 32,
      name: "Template 32",
      backgroundImage: "images/template/template-32.png",
      design:
        "https://cloud.contentql.io/share/DSB2tMvV5fJMeZr",
      preview: "https://podact.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 33,
      name: "Template 33",
      backgroundImage: "images/template/template-33.png",
      design:
        "https://cloud.contentql.io/share/1pPTWU7yOEfujTn",
      preview: "https://pizzalp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 34,
      name: "Template 34",
      backgroundImage: "images/template/template-34.png",
      design:
        "https://cloud.contentql.io/share/ClyyF21vqqba1DK",
      preview: "https://parfume.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 35,
      name: "Template 35",
      backgroundImage: "images/template/template-35.png",
      design:
        "https://cloud.contentql.io/share/CKBTBXN8FyLa5OO",
      preview: "https://orangephotography.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 36,
      name: "Template 36",
      backgroundImage: "images/template/template-36.png",
      design:
        "https://cloud.contentql.io/share/zl4pJLq8Q2itlLK",
      preview: "https://oktan3.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 37,
      name: "Template 37",
      backgroundImage: "images/template/template-37.png",
      design:
        "https://cloud.contentql.io/share/nqoty1ntHOGxOIk",
      preview: "https://oktane.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 38,
      name: "Template 38",
      backgroundImage: "images/template/template-38.png",
      design:
        "https://cloud.contentql.io/share/QMGw9IWoHWIC7ey",
      preview: "https://number5.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 39,
      name: "Template 39",
      backgroundImage: "images/template/template-39.png",
      design:
        "https://cloud.contentql.io/share/XjTwBe8seF67MXX",
      preview: "https://mimodesign.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 40,
      name: "Template 40",
      backgroundImage: "images/template/template-40.png",
      design:
        "https://cloud.contentql.io/share/tGI0gor0N5ttDiW",
      preview: "https://mechaniclp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 41,
      name: "Template 41",
      backgroundImage: "images/template/template-41.png",
      design:
        "https://cloud.contentql.io/share/1ukQmtyfEvuvuLR",
      preview: "https://itrepair.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 42,
      name: "Template 42",
      backgroundImage: "images/template/template-42.png",
      design:
        "https://cloud.contentql.io/share/xvIdZl62TxL9aeA",
      preview: "https://insurace.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 43,
      name: "Template 43",
      backgroundImage: "images/template/template-43.png",
      design:
        "https://cloud.contentql.io/share/2jduKFVR79UQwEp",
      preview: "https://horses.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 44,
      name: "Template 44",
      backgroundImage: "images/template/template-44.png",
      design:
        "https://cloud.contentql.io/share/TwsyhOZZ4Z6Xqxt",
      preview: "https://homeshop.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 45,
      name: "Template 45",
      backgroundImage: "images/template/template-45.png",
      design:
        "https://cloud.contentql.io/share/g8tyjeCnNqhsrRF",
      preview: "https://healthcaring.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 46,
      name: "Template 46",
      backgroundImage: "images/template/template-46.png",
      design:
        "https://cloud.contentql.io/share/owlc8tDWZSirg9G",
      preview: "https://gym2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 47,
      name: "Template 47",
      backgroundImage: "images/template/template-47.png",
      design:
        "https://cloud.contentql.io/share/w9pZDlzCZFRPgCK",
      preview: "https://modelagency.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 48,
      name: "Template 48",
      backgroundImage: "images/template/template-48.png",
      design:
        "https://cloud.contentql.io/share/aFuEVhr5ElWB50r",
      preview: "https://electriclp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 49,
      name: "Template 49",
      backgroundImage: "images/template/template-49.png",
      design:
        "https://cloud.contentql.io/share/3cdNAIFnZzM01tX",
      preview: "https://eladio.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 50,
      name: "Template 50",
      backgroundImage: "images/template/template-50.png",
      design:
        "https://cloud.contentql.io/share/tGbldMHyoCfbNIV",
      preview: "https://ebikes.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 51,
      name: "Template 51",
      backgroundImage: "images/template/template-51.png",
      design:
        "https://cloud.contentql.io/share/tJDN7VHpcyn1c4A",
      preview: "https://dieti.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 52,
      name: "Template 52",
      backgroundImage: "images/template/template-52.png",
      design:
        "https://cloud.contentql.io/share/1f4ABy1bs1L7IzS",
      preview: "https://danceschool2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 53,
      name: "Template 53",
      backgroundImage: "images/template/template-53.png",
      design:
        "https://cloud.contentql.io/share/izwhxIdLMjwt3uG",
      preview: "https://cryptothings.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 54,
      name: "Template 54",
      backgroundImage: "images/template/template-54.png",
      design:
        "https://cloud.contentql.io/share/LkfhZ90XXJhMuwl",
      preview: "https://corpio.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 55,
      name: "Template 55",
      backgroundImage: "images/template/template-55.png",
      design:
        "https://cloud.contentql.io/share/0NXGXwEnfNPg0gN",
      preview: "https://carwashnew.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 56,
      name: "Template 56",
      backgroundImage: "images/template/template-56.png",
      design:
        "https://cloud.contentql.io/share/UdHFZaowSoSR30s",
      preview: "https://carparts.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 57,
      name: "Template 57",
      backgroundImage: "images/template/template-57.png",
      design:
        "https://cloud.contentql.io/share/Uq8zGJVbIFYg58y",
      preview: "https://brandio.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 58,
      name: "Template 58",
      backgroundImage: "images/template/template-58.png",
      design:
        "https://cloud.contentql.io/share/hGpqgwWxSs0oynj",
      preview: "https://birthdayparty.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 59,
      name: "Template 59",
      backgroundImage: "images/template/template-59.png",
      design:
        "https://cloud.contentql.io/share/VkLzvoJfb0Et5AE",
      preview: "https://weddingph.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 60,
      name: "Template 60",
      backgroundImage: "images/template/template-60.png",
      design:
        "https://cloud.contentql.io/share/yfE0M6YSNTzLHw5",
      preview: "https://cospace.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 61,
      name: "Template 61",
      backgroundImage: "images/template/template-61.png",
      design:
        "https://cloud.contentql.io/share/V7I5DbebQkyFn5l",
      preview: "https://dronex.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 62,
      name: "Template 62",
      backgroundImage: "images/template/template-62.png",
      design:
        "https://cloud.contentql.io/share/o1hhQhDhyWcXHQR",
      preview: "https://smartlearning.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 63,
      name: "Template 63",
      backgroundImage: "images/template/template-63.png",
      design:
        "https://cloud.contentql.io/share/3KWIDsnYUMoiPxb",
      preview: "https://surfing.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 64,
      name: "Template 64",
      backgroundImage: "images/template/template-64.png",
      design:
        "https://cloud.contentql.io/share/FZgoE4zMTGRInQN",
      preview: "https://footballfc.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 65,
      name: "Template 65",
      backgroundImage: "images/template/template-65.png",
      design:
        "https://cloud.contentql.io/share/A8cb1fpJcHAX179",
      preview: "https://memento.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 66,
      name: "Template 66",
      backgroundImage: "images/template/template-66.png",
      design:
        "https://cloud.contentql.io/share/Qo5h5mW8sgl0SDn",
      preview: "https://craftwise.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 67,
      name: "Template 67",
      backgroundImage: "images/template/template-67.png",
      design:
        "https://cloud.contentql.io/share/orbAN8iwaQrfJJW",
      preview: "https://coin.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 68,
      name: "Template 68",
      backgroundImage: "images/template/template-68.png",
      design:
        "https://cloud.contentql.io/share/zpIHXZP7FAf2YfI",
      preview: "https://loftdesign.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 69,
      name: "Template 69",
      backgroundImage: "images/template/template-69.png",
      design:
        "https://cloud.contentql.io/share/qkHtdP2Br1aTNhP",
      preview: "https://empire.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 70,
      name: "Template 70",
      backgroundImage: "images/template/template-70.png",
      design:
        "https://cloud.contentql.io/share/YQ1yx0jXE5ydm1f",
      preview: "https://cameraapp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 71,
      name: "Template 71",
      backgroundImage: "images/template/template-71.png",
      design:
        "https://cloud.contentql.io/share/kgcNa4sud85cjkp",
      preview: "https://rankking.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 72,
      name: "Template 72",
      backgroundImage: "images/template/template-72.png",
      design:
        "https://cloud.contentql.io/share/ZlsgbPFQaOjuEYD",
      preview: "https://gourmet.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 73,
      name: "Template 73",
      backgroundImage: "images/template/template-73.png",
      design:
        "https://cloud.contentql.io/share/csxLAE62Ic24TVv",
      preview: "https://molino.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 74,
      name: "Template 74",
      backgroundImage: "images/template/template-74.png",
      design:
        "https://cloud.contentql.io/share/3Mq8JHJvjTwNfne",
      preview: "https://architekt.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 75,
      name: "Template 75",
      backgroundImage: "images/template/template-75.png",
      design:
        "https://cloud.contentql.io/share/qMFmVKPOeFDLGmC",
      preview: "https://fixit.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 76,
      name: "Template 76",
      backgroundImage: "images/template/template-76.png",
      design:
        "https://cloud.contentql.io/share/aULNEYAzxOvfths",
      preview: "https://winevine.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 77,
      name: "Template 77",
      backgroundImage: "images/template/template-77.png",
      design:
        "https://cloud.contentql.io/share/gShWqluezWJCmuD",
      preview: "https://moon.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 78,
      name: "Template 78",
      backgroundImage: "images/template/template-78.png",
      design:
        "https://cloud.contentql.io/share/yyeiFRFYFZNmMoU",
      preview: "https://workspace.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 79,
      name: "Template 79",
      backgroundImage: "images/template/template-79.png",
      design:
        "https://cloud.contentql.io/share/jxeUZdMsOxpmRO9",
      preview: "https://petits.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 80,
      name: "Template 80",
      backgroundImage: "images/template/template-80.png",
      design:
        "https://cloud.contentql.io/share/b4WBL3OKUVgtjAs",
      preview: "https://pearldent.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 81,
      name: "Template 81",
      backgroundImage: "images/template/template-81.png",
      design:
        "hhttps://cloud.contentql.io/share/82VjQAHY12FbLaG",
      preview: "https://naturalbeauty.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 82,
      name: "Template 82",
      backgroundImage: "images/template/template-82.png",
      design:
        "https://cloud.contentql.io/share/Psa0kdEVCZMJRra",
      preview: "https://itgroup.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 83,
      name: "Template 83",
      backgroundImage: "images/template/template-83.png",
      design:
        "https://cloud.contentql.io/share/pwF6U9NBjW79cp0",
      preview: "https://kids2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 84,
      name: "Template 84",
      backgroundImage: "images/template/template-84.png",
      design:
        "https://cloud.contentql.io/share/aJUoHHxeU593OKj",
      preview: "https://school2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 85,
      name: "Template 85",
      backgroundImage: "images/template/template-85.png",
      design:
        "https://cloud.contentql.io/share/qmkb7GpofebUsTf",
      preview: "https://carpenter.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 86,
      name: "Template 86",
      backgroundImage: "images/template/template-86.png",
      design:
        "https://cloud.contentql.io/share/1gxTehc4hjqwEt2",
      preview: "https://manicure1.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 87,
      name: "Template 87",
      backgroundImage: "images/template/template-87.png",
      design:
        "https://cloud.contentql.io/share/FuTxt4KXjizXI2u",
      preview: "https://hairdresser.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 88,
      name: "Template 88",
      backgroundImage: "images/template/template-88.png",
      design:
        "https://cloud.contentql.io/share/bSVNNsuVeH7BtFh",
      preview: "https://minimal.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 89,
      name: "Template 89",
      backgroundImage: "images/template/template-89.png",
      design:
        "https://cloud.contentql.io/share/Te2dgthdkGYVmR2",
      preview: "https://weddingph2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 90,
      name: "Template 90",
      backgroundImage: "images/template/template-90.png",
      design:
        "https://cloud.contentql.io/share/m5TjlRubpwDvdae",
      preview: "https://zoo.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 91,
      name: "Template 91",
      backgroundImage: "images/template/template-91.png",
      design:
        "https://cloud.contentql.io/share/PDFbGnK4Dx8kMty",
      preview: "https://interior.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 92,
      name: "Template 92",
      backgroundImage: "images/template/template-92.png",
      design:
        "https://cloud.contentql.io/share/4zAAGfEBR0cw1Rt",
      preview: "https://politics2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 93,
      name: "Template 93",
      backgroundImage: "images/template/template-93.png",
      design:
        "https://cloud.contentql.io/share/g4GcYUSlNtgWAQV",
      preview: "https://medicallp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 94,
      name: "Template 94",
      backgroundImage: "images/template/template-94.png",
      design:
        "https://cloud.contentql.io/share/KpDcFGbJEg3jicS",
      preview: "https://callcenter.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 95,
      name: "Template 95",
      backgroundImage: "images/template/template-95.png",
      design:
        "https://cloud.contentql.io/share/pGVojqBUWf7FNm1",
      preview: "https://consultant.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 96,
      name: "Template 96",
      backgroundImage: "images/template/template-96.png",
      design:
        "https://cloud.contentql.io/share/bQtqEPsTqrmL5Uk",
      preview: "https://cryptobold.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 97,
      name: "Template 97",
      backgroundImage: "images/template/template-97.png",
      design:
        "https://cloud.contentql.io/share/X0DrihxtafESuQZ",
      preview: "https://partynew.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 98,
      name: "Template 98",
      backgroundImage: "images/template/template-98.png",
      design:
        "https://cloud.contentql.io/share/9wqr4Ulrss2LK4z",
      preview: "https://spacenter2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 99,
      name: "Template 99",
      backgroundImage: "images/template/template-99.png",
      design:
        "https://cloud.contentql.io/share/DJihIYHOsMigK4I",
      preview: "https://financesite.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 100,
      name: "Template 100",
      backgroundImage: "images/template/template-100.png",
      design:
        "https://cloud.contentql.io/share/KLlHpiv5OrN4mW4",
      preview: "https://partysite.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 101,
      name: "Template 101",
      backgroundImage: "images/template/template-101.png",
      design:
        "https://cloud.contentql.io/share/lzH17n3DYM73ywA",
      preview: "https://tailor2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 102,
      name: "Template 102",
      backgroundImage: "images/template/template-102.png",
      design:
        "https://cloud.contentql.io/share/ItP5kZFXJ5LsVoA",
      preview: "https://musicsite.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 103,
      name: "Template 103",
      backgroundImage: "images/template/template-103.png",
      design:
        "https://cloud.contentql.io/share/EP5WleWKI1ObPst",
      preview: "https://cateringlp.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 104,
      name: "Template 104",
      backgroundImage: "images/template/template-104.png",
      design:
        "https://cloud.contentql.io/share/oxAXplmspce6y9F",
      preview: "https://resto.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 105,
      name: "Template 105",
      backgroundImage: "images/template/template-105.png",
      design:
        "https://cloud.contentql.io/share/jVnHOWABxiGh3YZ",
      preview: "https://lab2.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 106,
      name: "Template 106",
      backgroundImage: "images/template/template-106.png",
      design:
        "https://cloud.contentql.io/share/zg2yXElRtSkeB1R",
      preview: "https://gardensite.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
    {
      id: 107,
      name: "Template 107",
      backgroundImage: "images/template/template-107.png",
      design:
        "https://cloud.contentql.io/share/POS5GhuKnvyXtbA",
      preview: "https://swimmingpool.resonateaes.com/",
      type: "pro",
      category: "Business",
    },
  ];

  const searchParams = useSearchParams();
  const [filter, setFilter] = useState(
    searchParams.get("category") ? searchParams.get("category") : ""
  );
  const filterByName = (template) => {
    if (filter === "All") return true;
    return template.category.toLowerCase().includes(filter.toLowerCase());
  };

  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 5;

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = templates
    .filter(filterByName)
    .slice(indexOfFirstTemplate, indexOfLastTemplate);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <TemplateFilter filter={filter} setFilter={setFilter} />

        <div id="page" className="page-wrapper">
          <section
            id="select"
            className="bg-fixed select-section template-select"
          >
            <div className="container">
              <div className="row">
                {/* LAYOUT-1 */}
                <div
                  id="l-0"
                  className="col-md-6 col-lg-4 select_link wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="hover-overlay card-view">
                    <span className="react-icon">
                      <LiaPlusCircleSolid size={40} />
                    </span>
                    <div className="text-container">
                      <div className="text-wow">
                        <Link
                          href="https://cloud.contentql.io/projects/create"
                          target="_blank"
                        >
                          Go with this design
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <h4> Start from Scratch</h4>
                </div>
                {currentTemplates.filter(filterByName).map((template) => (
                  <div
                    key={template.id}
                    id="l-1"
                    className="col-md-6 col-lg-4 select_link wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="hover-overlay card-view">
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
                ))}
              </div>
              <div className="row">
                <ul className="pagination">
                  {Array.from(
                    {
                      length: Math.ceil(
                        templates.filter(filterByName).length / templatesPerPage
                      ),
                    },
                    (_, i) => (
                      <li key={i} className="page-item">
                        <a
                          onClick={() => paginate(i + 1)}
                          href="#"
                          className="page-link"
                        >
                          {i + 1}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>{" "}
          </section>{" "}
        </div>
      </Layout>
    </>
  );
}

export default Templates;
