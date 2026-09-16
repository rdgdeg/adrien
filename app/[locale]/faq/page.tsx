import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getDictionary(raw);
  return { title: t.faq.title, description: t.faq.subtitle };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  return (
    <main>
      <PageHero
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        image="/photos/cour.jpg"
        alt={t.faq.title}
      />
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <dl className="space-y-12">
          {t.faq.items.map((item) => (
            <Reveal key={item.q}>
              <div>
                <dt className="font-serif text-2xl italic md:text-3xl">
                  {item.q}
                </dt>
                <dd className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {item.a}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </main>
  );
}
