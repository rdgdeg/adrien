import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-script text-2xl text-moss">Ostiches</p>
      <h1 className="mt-4 font-serif text-5xl italic">Page introuvable</h1>
      <p className="mt-4 text-ink-soft">Ce rang n’existe pas encore.</p>
      <Link
        href="/"
        className="mt-8 text-[11px] uppercase tracking-nav underline decoration-gold underline-offset-8"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
