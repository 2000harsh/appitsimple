import {
  CodeOutlined,
  LayoutOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const cards1 = [
  {
    title: "Development",
    icon: (
      <CodeOutlined
        style={{ position: "absolute", top: "17px", left: "18px" }}
      />
    ),
    value: "development",
  },
  {
    title: "Web Design",
    icon: (
      <LayoutOutlined
        style={{ position: "absolute", top: "17px", left: "18px" }}
      />
    ),
    value: "web-design",
  },
  {
    title: "Marketing",
    icon: (
      <BarChartOutlined
        style={{ position: "absolute", top: "17px", left: "18px" }}
      />
    ),
    value: "marketing",
  },
  {
    title: "Other",
    icon: (
      <SettingOutlined
        style={{ position: "absolute", top: "17px", left: "18px" }}
      />
    ),
    value: "other",
  },
];

export const data1 = [
  { title: "$5,000-$10,000", value: "5000-10000" },
  { title: "$10,000-$20,000", value: "10000-20000" },
  { title: "$20,000-$50,000", value: "20000-50000" },
  { title: "$50,000+", value: "50000+" },
];
