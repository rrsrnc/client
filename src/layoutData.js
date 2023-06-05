import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaFolderOpen,
  FaWpforms,
} from "react-icons/fa";

import { AiOutlineTable } from "react-icons/ai";

import { GiDrill } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";

export const links = [
  {
    id: 1,
    url: "/home",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/cncinfo",
    text: "CNC Info",
    icon: <GiDrill />,
  },
  {
    id: 3,
    url: "/table",
    text: "Tabular Data",
    icon: <AiOutlineTable />,
  },
  {
    id: 4,
    url: "/graph1",
    text: "Temperature Graph",
    icon: <AiOutlineLineChart />,
  },
  {
    id: 5,
    url: "/graph2",
    text: "Deflection Graph",
    icon: <AiOutlineLineChart />,
  },
  {
    id: 6,
    url: "/graph3",
    text: "Compare Graphs",
    icon: <AiOutlineLineChart />,
  },
  {
    id: 7,
    url: "/selectmodel",
    text: "Select Model",
    icon: <BiNetworkChart />,
  },
  {
    id: 8,
    url: "/dataload",
    text: "Download data",
    icon: <FaFolderOpen />,
  },
  {
    id: 9,
    url: "/documents",
    text: "Documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
