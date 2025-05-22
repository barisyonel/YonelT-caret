// Link import'unu kaldır
// import Link from "next/link";

const kategoriler = [
  { ad: "Iveco", link: "/kategoriler/iveco", icon: "🚚", aciklama: "Tüm Iveco yedek parçaları" },
  { ad: "Eurobus", link: "/kategoriler/eurobus", icon: "🚌", aciklama: "Eurobus için fren, motor ve daha fazlası" },
  { ad: "Ducato", link: "/kategoriler/ducato", icon: "🚐", aciklama: "Ducato motor ve elektrik aksamı" },
  { ad: "Karataş Traktör", link: "/kategoriler/karatas-traktor", icon: "🚜", aciklama: "Karataş Traktör yedek parça çeşitleri" },
  { ad: "Foton Traktör", link: "/kategoriler/foton-traktor", icon: "🚜", aciklama: "Foton Traktör için orijinal parçalar" },
];

// Popüler ürünler örnek
const populerUrunler = [
  { ad: "Iveco Daily Debriyaj Seti", kategori: "Iveco", img: "🚚" },
  { ad: "Eurobus Fren Balatası", kategori: "Eurobus", img: "🚌" },
  { ad: "Ducato Yağ Filtresi", kategori: "Ducato", img: "🚐" },
  { ad: "Karataş Mazot Pompası", kategori: "Karataş Traktör", img: "🚜" },
];

export default function KategorilerPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="max-w-5xl mx-auto w-full mt-8 mb-4 px-2">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Markalar</h1>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl">Yönel Ticaret&apos;te Iveco, Eurobus, Ducato, Karataş ve Foton Traktör grubu için orijinal ve muadil yedek parça markalarını bulabilirsiniz. Aşağıdan markanızı seçin ve ürünlere göz atın.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {kategoriler.map((kat) => (
            <a key={kat.ad} href={kat.link} className="bg-white shadow-md rounded-2xl p-8 text-center border border-blue-100 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col items-center gap-3">
              <span className="text-5xl mb-2">{kat.icon}</span>
              <span className="text-xl font-bold text-blue-900 mb-1">{kat.ad}</span>
              <span className="text-gray-600 text-sm">{kat.aciklama}</span>
            </a>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto w-full mb-8 px-2">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Popüler Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {populerUrunler.map((urun) => (
            <div key={urun.ad} className="bg-white shadow rounded-xl p-6 flex flex-col items-center gap-2 border border-blue-100 hover:scale-105 hover:shadow-md transition-all duration-200">
              <span className="text-4xl mb-2">{urun.img}</span>
              <span className="font-semibold text-blue-900 text-center">{urun.ad}</span>
              <span className="text-sm text-gray-500">{urun.kategori}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 