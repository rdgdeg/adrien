import Image from "next/image";

export function LogoMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/brand/logo-dd.webp"
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
