export type JourneyStep = {
  step: number;
  title: string;
  description: string;
  stakeholders: string;
};

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Policy awareness & local advice",
    description:
      "A farmer learns what agroforestry support exists and talks to local agricultural extension staff about whether it fits their land.",
    stakeholders: "State agriculture departments, extension workers, farmer organisations",
  },
  {
    step: 2,
    title: "Selecting species & system",
    description:
      "Choosing which trees, crops and layout suit the farm's soil, rainfall, water access and the farmer's own risk appetite.",
    stakeholders: "Agricultural universities, ICAR institutes, extension advisors",
  },
  {
    step: 3,
    title: "Access to planting material",
    description:
      "Sourcing healthy, regionally appropriate saplings — increasingly from nurseries strengthened under the RKVY agroforestry component.",
    stakeholders: "Government and private nurseries, state forest departments",
  },
  {
    step: 4,
    title: "Establishment & management",
    description:
      "Planting, protecting young trees, and managing the combined system as crops, trees and any livestock mature together.",
    stakeholders: "The farmer and farm labour, local input suppliers",
  },
  {
    step: 5,
    title: "Regulatory compliance",
    description:
      "Understanding the felling and transit rules that apply in the farmer's own state before harvesting or moving timber.",
    stakeholders: "State forest departments, divisional forest officers",
  },
  {
    step: 6,
    title: "Market access",
    description:
      "Connecting to buyers, processors and reliable price information for fruit, timber, fodder or other farm produce.",
    stakeholders: "Traders, processing units, mandis, private-sector buyers",
  },
  {
    step: 7,
    title: "Evaluating returns",
    description:
      "Reviewing what the system actually delivered in resources used and income earned, to guide the next cycle of decisions.",
    stakeholders: "Farmer, research institutions, financial institutions",
  },
];
