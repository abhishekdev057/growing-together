export type StateProfile = {
  id: string;
  name: string;
  region: string;
  illustrativeSystem: string;
  context: string;
  departmentName: string;
  departmentUrl: string;
};

/**
 * These are illustrative possibilities based on well-documented regional
 * agroecology, not official scheme guarantees. Species choice, subsidy
 * eligibility and permission requirements must be confirmed with the
 * farmer's own state department before acting.
 */
export const stateProfiles: StateProfile[] = [
  {
    id: "punjab",
    name: "Punjab",
    region: "North India",
    illustrativeSystem: "Poplar-based agroforestry",
    context:
      "Parts of north-west India's irrigated plains have long supported poplar grown in rows alongside wheat and other field crops, valued by the plywood and paper industries. Species choice, spacing and felling rules still vary by location and should be confirmed locally.",
    departmentName: "Department of Forests & Wildlife Preservation, Punjab",
    departmentUrl: "https://punjab.gov.in/government/departments/department-of-forest-wild-life-preservation/",
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    region: "North India",
    illustrativeSystem: "Poplar and eucalyptus boundary planting",
    context:
      "Similar irrigated, flat terrain supports boundary and block planting of fast-growing species alongside sugarcane and cereal crops in several districts. Local soil and water conditions determine what performs well.",
    departmentName: "Uttar Pradesh Forest Department",
    departmentUrl: "https://upforest.gov.in/",
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    region: "Central India",
    illustrativeSystem: "Fruit-tree and field-crop combinations",
    context:
      "Central Indian environments with moderate rainfall support combining fruit trees such as mango or custard apple with pulses or oilseeds, spreading farm income across different harvest cycles.",
    departmentName: "Madhya Pradesh Forest Department",
    departmentUrl: "https://mpforest.gov.in/",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "West/Central India",
    illustrativeSystem: "Orchard-based and dryland tree-crop systems",
    context:
      "Varied terrain across Maharashtra supports orchard crops integrated with field crops in better-watered areas, and hardier, drought-tolerant tree-crop combinations in drier tracts.",
    departmentName: "Maharashtra Forest Department",
    departmentUrl: "https://mahaforest.gov.in/",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "Arid West India",
    illustrativeSystem: "Dryland, soil-conservation-oriented systems",
    context:
      "Arid and semi-arid tracts have a long tradition of integrating hardy, multipurpose trees with livestock and drought-tolerant crops, supporting soil conservation and fodder supply where rainfall is limited and unpredictable.",
    departmentName: "Rajasthan Forest Department",
    departmentUrl: "https://forest.rajasthan.gov.in/",
  },
  {
    id: "assam",
    name: "Assam",
    region: "Northeast India",
    illustrativeSystem: "Bamboo and multipurpose tree systems",
    context:
      "Humid northeastern conditions favour bamboo and other fast-growing multipurpose species grown alongside homestead and plantation crops, supporting both household use and local processing.",
    departmentName: "Assam Forest Department",
    departmentUrl: "https://forest.assam.gov.in/",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    region: "South India",
    illustrativeSystem: "Plantation and horticultural tree-crop systems",
    context:
      "Varied elevation and rainfall across Karnataka support everything from coffee- and areca-based shade systems in the Western Ghats to drier mixed tree-crop systems on the plateau.",
    departmentName: "Karnataka Forest Department",
    departmentUrl: "https://aranya.gov.in/",
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South India",
    illustrativeSystem: "Homestead and multi-tier tree-crop gardens",
    context:
      "Kerala's homestead farming tradition often layers coconut, areca nut, spices, fruit trees and shade-tolerant crops within the same small plot — a dense, multi-tier form of agroforestry shaped by high rainfall and small landholdings.",
    departmentName: "Kerala Forest & Wildlife Department",
    departmentUrl: "https://forest.kerala.gov.in/",
  },
];
