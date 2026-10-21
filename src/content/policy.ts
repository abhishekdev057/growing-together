export type PolicyMilestone = {
  id: string;
  period: string;
  name: string;
  summary: string;
  objectives: string[];
  farmerRelevance: string;
  sourceLabel: string;
  sourceUrl: string;
  note?: string;
};

export const policyMilestones: PolicyMilestone[] = [
  {
    id: "nap-2014",
    period: "2014",
    name: "National Agroforestry Policy",
    summary:
      "India became one of the first countries to adopt a dedicated national policy for agroforestry, recognising the practice of growing trees on farmland as a distinct field requiring coordinated support across agriculture, forestry and environment departments.",
    objectives: [
      "Encourage and expand tree planting integrated with crops and livestock on farmland",
      "Improve productivity, soil health and resource-use efficiency on farms",
      "Diversify rural livelihoods and support additional sources of farm income",
      "Help meet raw-material needs of wood-based industries and reduce timber imports",
      "Build a supportive regulatory framework for felling and transit of farm-grown trees",
    ],
    farmerRelevance:
      "A national policy sets direction and coordinates institutions — it is not itself a subsidy or a cash scheme. Farmer-facing support (nurseries, planting material, extension) arrived later through dedicated programmes built on this framework.",
    sourceLabel: "Press Information Bureau — National Agroforestry Policy background",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1982788&lang=2&reg=48",
  },
  {
    id: "smaf-2016",
    period: "2016–17 to 2021–22",
    name: "Sub-Mission on Agroforestry (SMAF)",
    summary:
      "Launched under the motto “Har Medh Par Ped” (a tree on every farm boundary), the Sub-Mission on Agroforestry was the first dedicated programme translating the 2014 policy into farmer-facing action — supporting planting material, nurseries and the integration of trees into existing cropping systems.",
    objectives: [
      "Encourage farmers to plant trees along field boundaries and within cropping systems",
      "Expand availability of quality planting material through nurseries",
      "Build technical and institutional capacity for agroforestry extension",
      "Generate data and research to guide future agroforestry programming",
    ],
    farmerRelevance:
      "SMAF ran for a defined implementation period — 2016–17 through 2021–22 — and was not an unchanged, indefinitely continuing scheme. Its tools and lessons fed into the restructured programme that followed under RKVY.",
    sourceLabel: "Press Information Bureau — Sub-Mission on Agroforestry",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1982788&lang=2&reg=48",
  },
  {
    id: "rkvy-2023",
    period: "From 2023–24",
    name: "Agroforestry Component under RKVY",
    summary:
      "The programme was restructured and brought under the Rashtriya Krishi Vikas Yojana (RKVY) umbrella from 2023–24, with support concentrated on strengthening the nursery network that supplies farmers with planting material.",
    objectives: [
      "Establish and strengthen agroforestry nurseries (Hi-Tech, Big and Small categories)",
      "Expand production and supply of Quality Planting Material (QPM) and seedlings",
      "Support capacity building, awareness and farmer outreach",
      "Fund research, development and monitoring of agroforestry outcomes",
    ],
    farmerRelevance:
      "Stronger, better-distributed nurseries shorten the distance between a farmer deciding to plant trees and actually getting healthy, regionally suited saplings — a practical bottleneck in many districts.",
    sourceLabel: "Press Information Bureau — Agroforestry Component under RKVY",
    sourceUrl: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159690&id=159690&lang=1&reg=44",
    note:
      "Reported figures such as nursery counts, cost norms or beneficiary numbers belong to a specific reporting period (e.g. FY 2023–24 output of 156 new and 470 supported existing nurseries, per PIB). Treat these as dated figures tied to that period, not as current running totals.",
  },
  {
    id: "state-felling-2024",
    period: "Ongoing — varies by state",
    name: "State-Level Tree-Felling and Transit Regulations",
    summary:
      "Felling and transit permissions for trees grown on farmland are governed by state-level rules, not a single uniform national rule. The Union government has encouraged states to exempt common farm-grown species from cumbersome permit requirements, but adoption and specifics differ by state and change over time.",
    objectives: [
      "Simplify permission requirements for felling farm-grown (not natural-forest) trees",
      "Reduce documentation burden for moving timber across state lines",
      "Encourage states to notify locally exempt species lists",
    ],
    farmerRelevance:
      "A species or process that is exempt in one state may still require permission in another, and rules are revised periodically. Farmers and timber traders should verify current requirements with their own state forest or agriculture department before felling or transporting farm-grown timber — never assume a blanket national exemption.",
    sourceLabel: "Press Information Bureau — state timber felling and transit rules",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289993&lang=1&reg=3",
    note:
      "Always check the current rules for your specific state and tree species before acting — this page does not substitute for official guidance.",
  },
];
