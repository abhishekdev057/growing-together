export type Reference = {
  id: string;
  title: string;
  publisher: string;
  description: string;
  url: string;
};

export const references: Reference[] = [
  {
    id: "pib-nap",
    title: "National Agroforestry Policy — background and objectives",
    publisher: "Press Information Bureau, Government of India",
    description:
      "Official background on India's National Agroforestry Policy and the Sub-Mission on Agroforestry that followed it.",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1982788&lang=2&reg=48",
  },
  {
    id: "pib-rkvy",
    title: "Agroforestry Component under RKVY — restructuring from 2023–24",
    publisher: "Press Information Bureau, Government of India",
    description:
      "Official explanation of how the agroforestry programme was restructured under the Rashtriya Krishi Vikas Yojana, including nursery support categories.",
    url: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159690&id=159690&lang=1&reg=44",
  },
  {
    id: "pib-felling",
    title: "State-level timber felling and transit rules",
    publisher: "Press Information Bureau, Government of India",
    description:
      "Government communication on the state-by-state nature of tree felling and timber transit regulation in India.",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289993&lang=1&reg=3",
  },
  {
    id: "icar-extension",
    title: "Capacity building and extension strategies for scaling agroforestry",
    publisher: "Indian Council of Agricultural Research (ICAR)",
    description:
      "ICAR's discussion of strengthening agroforestry extension services, market linkages and farmer-oriented implementation.",
    url: "https://icar.gov.in/index.php/en/thematic-session-highlights-capacity-building-and-extension-strategies-scaling-agroforestry",
  },
  {
    id: "icar-parasai-sindh",
    title: "Parasai-Sindh Watershed — salient findings",
    publisher: "ICAR-CAFRI, Jhansi",
    description:
      "Official summary of the agroforestry-based Parasai-Sindh watershed project in Babina block, Jhansi, including its reported effects on groundwater, base flow and household income.",
    url: "https://icar.org.in/en/node/4757",
  },
  {
    id: "icar-ija-profitability",
    title: "Agroforestry profitability, price volatility and policy interactions",
    publisher: "Indian Journal of Agroforestry (ICAR ePubs)",
    description:
      "Peer-reviewed research examining the economics of agroforestry systems, including price volatility and policy effects on returns. Findings are specific to the study's location and time period.",
    url: "https://epubs.icar.org.in/ejournal/index.php/IJA/article/view/102936/0",
  },
];
