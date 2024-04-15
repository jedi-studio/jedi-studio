import Navbar from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
