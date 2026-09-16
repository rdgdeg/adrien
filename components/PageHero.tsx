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
    <header className="relative h-[58vh] min-h-[320px] overflow-hidden sm:h-[70vh] sm:min-h-[420px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="kenburns object-cover"
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative flex h-full flex-col items-center justify-center px-5 pt-16 text-center text-white sm:px-6">
        <h1 className="animate-fade-up font-serif text-4xl italic sm:text-5xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl animate-fade-up text-base text-white/90 [animation-delay:120ms] sm:mt-5 sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
