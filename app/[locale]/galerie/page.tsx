import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { gallery } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Galerie",
  description: "Photos du vignoble, de la ferme et des crémants du Domaine Degavre.",
};

export default function GaleriePage() {
  return (
    <main>
      <PageHero
        title="Photos"
        subtitle="Le Pays des Collines, les rangs, la ferme et les bulles."
        image="/photos/vignoble.jpg"
        alt="Vignoble Degavre"
      />
      <section className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <Reveal key={photo.src + index} delay={(index % 3) * 80}>
            <figure className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </section>
      <p className="px-6 py-10 text-center text-base text-ink-soft">
        Photographies du Domaine Degavre, Ostiches.
      </p>
    </main>
  );
}
