export type EvidenceItem = {
  id: string;
  kind: "stat" | "qualitative";
  headline: string;
  detail: string;
  period: string;
  source: string;
  sourceUrl: string;
};

export const evidenceItems: EvidenceItem[] = [
  {
    id: "nursery-output",
    kind: "stat",
    headline: "156 new nurseries, 470 strengthened",
    detail:
      "In the reported year, 156 new agroforestry nurseries were established and 470 existing nurseries were supported under the restructured Agroforestry Component of RKVY — the network that supplies farmers with quality planting material.",
    period: "Reporting period: FY 2023–24",
    source: "Press Information Bureau, Government of India",
    sourceUrl: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159690&id=159690&lang=1&reg=44",
  },
  {
    id: "nursery-cost-norms",
    kind: "stat",
    headline: "₹10–50 lakh assistance norms, by nursery size",
    detail:
      "Official cost norms for nursery establishment: Hi-Tech (2 ha) nurseries up to ₹50 lakh, Big (1 ha) nurseries up to ₹16 lakh, and Small (0.5 ha) nurseries up to ₹10 lakh, with raising saplings in existing nurseries capped at ₹5 lakh per nursery. Government agencies receive 100% assistance on government land; private agencies and individual entrepreneurs receive 50%.",
    period: "As documented in December 2023",
    source: "Press Information Bureau, Government of India",
    sourceUrl: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159690&id=159690&lang=1&reg=44",
  },
  {
    id: "smaf-window",
    kind: "qualitative",
    headline: "A defined, time-bound mission",
    detail:
      "The original Sub-Mission on Agroforestry was implemented over a fixed six-year window, not as an open-ended scheme. Its tools and lessons were carried forward into the restructured RKVY component from 2023–24 rather than continuing unchanged.",
    period: "Implementation period: 2016–17 to 2021–22",
    source: "Press Information Bureau, Government of India",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1982788&lang=2&reg=48",
  },
  {
    id: "profitability-study",
    kind: "qualitative",
    headline: "Profitability is real, but site-specific",
    detail:
      "Peer-reviewed agroforestry research has examined profitability alongside price volatility and policy effects on farmer returns. Results are tied to the specific locations, species and time periods studied — they describe what happened in that study, not a guaranteed return for every Indian farm.",
    period: "See study for location and period",
    source: "Indian Journal of Agroforestry (ICAR ePubs)",
    sourceUrl: "https://epubs.icar.org.in/ejournal/index.php/IJA/article/view/102936/0",
  },
];
