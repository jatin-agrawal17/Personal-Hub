import { Icons } from "@/components/icons";
import {
  Code,
  Medal,
  User,
  FileText,
  LayoutGrid,
} from "lucide-react";
import { projects } from "./data.projects";
import { research } from "./data.research";
import { work } from "./data.work";
import { education } from "./data.education";
import { achievements } from "./data.achievements";
import { socials } from "./data.socials";
import { skills } from "./data.skills";
import { contributions } from "./data.contributions";
import { packages } from "./data.packages";

export const DATA = {
  name: "Jatin Agrawal",
  initials: "JA",
  url: "http://localhost:3000",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/jaipur",
description:
  "Data Science & Machine Learning Enthusiast | Python Backend Developer",
summary:
  "I am a B.Tech student in Mechanical-Mechatronics Engineering at The LNM Institute of Information Technology (LNMIIT), Jaipur, with a strong interest in Data Science, Machine Learning, and Software Development. I enjoy working with data, building machine learning models, and solving real-world problems using Python. I have experience with Django, SQL, and data analysis, and I am continuously expanding my knowledge in Deep Learning, Natural Language Processing, Database Management Systems, and Operating Systems.",

  avatarUrl: "/img/me.jpg",
  // resumeLatexUrl: "/img/resume.tex",
  skills,
  navbar: [
    { href: "/#about", icon: User, label: "About" },
    { href: "/#research", icon: FileText, label: "Research" },
    { href: "/#projects", icon: LayoutGrid, label: "Projects" },
    { href: "/#packages", icon: Icons.package, label: "Packages" },
    { href: "/#github-stats", icon: Icons.github, label: "GitHub Stats" },
    { href: "/#stats", icon: Icons.leetcode, label: "LeetCode Stats" },
    { href: "/#achievements", icon: Medal, label: "Achievements" },
  ],
  contact: {
    email: "agrawaljatin405@gmail.com",
    tel: "+916350378500",
    social: socials,
  },
  work,
  education,
  projects,
  research,
  contributions,
  packages,
  hackathons: achievements,
};
