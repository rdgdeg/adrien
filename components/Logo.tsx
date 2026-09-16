import { LogoMark } from "@/components/LogoMark";

export function Logo({
  compact = false,
  header = false,
  light = false,
}: {
  compact?: boolean;
  header?: boolean;
  light?: boolean;
}) {
  const color = light ? "text-white" : "text-ink";
  const markSize = compact ? 28 : header ? 32 : 40;

  return (
    <span className={`flex flex-col items-center ${color}`}>
      <LogoMark size={markSize} className={header ? "md:h-9 md:w-9" : ""} />
      <span
        className={`mt-1 font-display font-semibold uppercase ${
          header
            ? "text-[9px] tracking-[0.18em] sm:text-[10px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.24em]"
            : compact
              ? "text-[10px] tracking-logo"
              : "text-[11px] tracking-logo md:text-[12px]"
        }`}
      >
        Domaine Degavre
      </span>
      {!compact && (
        <span
          className={`font-script leading-none ${
            header
              ? "mt-0.5 hidden text-[15px] sm:block md:text-[16px]"
              : "text-[19px]"
          } ${light ? "text-white/90" : "text-moss"}`}
        >
          Ostiches
        </span>
      )}
    </span>
  );
}
