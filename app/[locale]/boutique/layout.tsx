import { AgeGate } from "@/components/AgeGate";

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AgeGate>{children}</AgeGate>;
}
