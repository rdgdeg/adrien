import { site } from "@/lib/content";

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function FacebookLink({
  className = "",
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <a
      href={site.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Domaine Degavre sur Facebook"
      className={`inline-flex items-center justify-center text-ink transition-colors hover:text-moss ${className}`}
    >
      <FacebookIcon className={iconClassName ?? "h-[18px] w-[18px]"} />
    </a>
  );
}
