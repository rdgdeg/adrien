import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
  alt,
}: {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="kenburns object-cover"
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="animate-fade-up font-serif text-5xl italic md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl animate-fade-up text-xl text-white/90 [animation-delay:120ms]">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
