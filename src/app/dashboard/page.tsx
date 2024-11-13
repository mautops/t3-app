import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Dashboard() {
  return <div>Dashboard</div>;
}
