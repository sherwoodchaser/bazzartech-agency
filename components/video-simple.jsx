import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import Image from "next/image";
import Outline from "@/public/out-line.png";

function VideoSimple() {
  return (
    <section
      className="relative w-full text-white bg-[#0b0b0b] overflow-hidden py-20 md:py-44 "
      id="portfolio"
    >
      <Image src={Outline} alt="outline" className="absolute right-0 top-0" />
      <Image
        src={Outline}
        alt="outline"
        className="absolute left-0 bottom-0 rotate-180"
      />
      <div className="relative max-w-7xl mx-auto flex flex-col px-6 md:px-0">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold leading-snug">
            Vidéo démonstrative
          </h3>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 items-center">
          <div className="text-xl">
            <p className="text-white/90 text-balance  leading-relaxed ">
              Vous souhaitez une vidéo publicitaire qui vend réellement, et pas
              seulement un joli visuel ? Nous concevons et montons des vidéos
              publicitaires professionnelles qui vous aident à capter
              l'attention, mettre en valeur votre produit, et augmenter vos
              ventes sur différentes plateformes sociales comme Facebook,
              Instagram et TikTok.
            </p>

            <p className="text-white/90  leading-relaxed">
              ✅ Ce que nous offrons : Nous prenons votre produit ou service et
              le transformons en une vidéo publicitaire courte et percutante,
              spécialement conçue pour attirer les clients cibles.
            </p>
          </div>

          <div>
            {/* Replace the 'videoUrl' with your actual video URL */}
            <HeroVideoDialog
              className="block dark:hidden border-none outline-none"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/F4yb0CBd4I4?si=QsIr5Ls-oEehuxSL"
              thumbnailSrc="https://img.youtube.com/vi/F4yb0CBd4I4/maxresdefault.jpg"
              thumbnailAlt="Dummy Video Thumbnail"
            />
          </div>
        </div>
        <div className="text-xl">
          <p className="text-white/90  leading-relaxed mt-6">
            ⭐ Les avantages de notre service :
            <ul className="list-disc ml-8 mt-4">
              <li>
                🎯 Vidéo axée sur la vente : Nous mettons en avant les
                bénéfices, pas seulement l'apparence, pour attirer les clients
                potentiels
              </li>
              <li>
                ⏱ Montage au rythme rapide : Car les 3 premières secondes
                déterminent si le spectateur reste ou quitte
              </li>
              <li>
                📝 Textes dynamiques et clairs : Des messages directs et
                convaincants apparaissant sur la vidéo
              </li>
              <li>
                🎶 Musique et rythme captivants : Avec des effets sonores
                soigneusement choisis
              </li>
              <li>
                📏 Formats adaptés aux publicités : Comme 9:16 pour les Reels,
                et 1:1 pour Facebook
              </li>
              <li>
                🧪 Tests A/B : Possibilité de concevoir plusieurs versions pour
                tester les performances
              </li>
              <li>
                🚀 Prêt à être lancé : Vidéo en haute qualité prête à être
                téléchargée immédiatement sur les plateformes
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSimple;
