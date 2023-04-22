import { Sparkles } from "lucide-react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "DATA-BLOCKS" },
    {
      name: "description",
      content:
        "A modern, source-available data visualization and business intelligence platform inspired by Google Looker.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <h1>
        <Sparkles /> DATA-BLOCKS
      </h1>
    </>
  );
}
