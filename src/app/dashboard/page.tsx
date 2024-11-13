import { Button } from "~/components/ui/button";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Dashboard() {
  return <a href="/">Dashboard</a>;
}
