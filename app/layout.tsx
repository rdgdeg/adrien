import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  Figtree,
  Pinyon_Script,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";

const sans = Figtree({
  variable: "--font-degavre-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Source_Serif_4({
  variable: "--font-degavre-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Cormorant_Garamond({
  variable: "--font-degavre-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const display = Bodoni_Moda({
  variable: "--font-degavre-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const script = Pinyon_Script({
  variable: "--font-degavre-script",
  subsets: ["latin"],
  weight: "400",
});

/** Exécuté avant le paint si le splash a déjà été vu. */
const splashBootScript = `(function(){try{if(localStorage.getItem("degavre-splash-seen")){document.documentElement.classList.add("splash-seen");}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: "Domaine Degavre · Ostiches",
    template: "%s · Domaine Degavre",
  },
  description:
    "Domaine viticole familial à Ostiches, au Pays des Collines. AOP Crémant de Wallonie, ferme de Martincamps depuis 1772.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${sans.variable} ${body.variable} ${serif.variable} ${display.variable} ${script.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: splashBootScript }}
        />
      </head>
      <body
        className="min-h-full bg-paper text-ink"
        suppressHydrationWarning
      >
        {/* Écran logo dès le HTML — masqué en CSS, jamais retiré du DOM */}
        <div
          id="boot-splash"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          aria-hidden="true"
          suppressHydrationWarning
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-dd.webp"
            alt=""
            width={88}
            height={88}
            className="h-[88px] w-[88px] object-contain"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
