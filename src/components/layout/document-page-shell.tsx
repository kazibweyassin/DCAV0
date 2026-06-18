import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface DocumentPageShellProps {
  children: React.ReactNode;
}

export function DocumentPageShell({ children }: DocumentPageShellProps) {
  return (
    <div className="theme-document min-h-screen bg-background text-foreground">
      <Navbar variant="light" />
      {children}
      <Footer variant="light" />
    </div>
  );
}