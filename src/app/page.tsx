// import Image from "next/image";

export default function Home() {
  // Mock kategoriler ve ürünler
  const kategoriler = [
    { ad: "Iveco", link: "/kategoriler/iveco", icon: "🚚" },
    { ad: "Eurobus", link: "/kategoriler/eurobus", icon: "🚌" },
    { ad: "Ducato", link: "/kategoriler/ducato", icon: "🚐" },
    { ad: "Karataş Traktör", link: "/kategoriler/karatas-traktor", icon: "🚜" },
    { ad: "Foton Traktör", link: "/kategoriler/foton-traktor", icon: "🚜" },
  ];
  const urunler = [
    { ad: "Iveco Daily Debriyaj Seti", kategori: "Iveco", link: "#", img: "/placeholder-part.svg" },
    { ad: "Eurobus Fren Balatası", kategori: "Eurobus", link: "#", img: "/placeholder-part.svg" },
    { ad: "Ducato Yağ Filtresi", kategori: "Ducato", link: "#", img: "/placeholder-part.svg" },
    { ad: "Karataş Traktör Mazot Pompası", kategori: "Karataş Traktör", link: "#", img: "/placeholder-part.svg" },
    { ad: "Foton Traktör Hava Filtresi", kategori: "Foton Traktör", link: "#", img: "/placeholder-part.svg" },
  ];
  return (
    <div className="flex flex-col gap-20 bg-white">
      {/* Hero Alanı */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl py-16 px-6 text-center text-blue-900 shadow-md flex flex-col items-center gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow mb-2">Yönel Ticaret Yedek Parça</h1>
        <p className="text-xl max-w-2xl mx-auto mb-4 text-blue-800">Iveco, Eurobus, Ducato, Karataş ve Foton Traktör grubu yedek parçalarında güvenilir adres. Orijinal ve muadil yedek parça çeşitlerimizle hizmetinizdeyiz.</p>
        <a href="https://wa.me/905414873365" target="_blank" rel="noopener" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-all">Hemen İletişime Geç</a>
      </section>
      {/* Kategoriler */}
      <section className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Markalar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {kategoriler.map((kat) => (
            <a key={kat.ad} href={kat.link} className="bg-white shadow-sm rounded-xl p-6 text-center border border-blue-100 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col items-center gap-3">
              <span className="text-4xl mb-2">{kat.icon}</span>
              <span className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">{kat.ad}</span>
            </a>
          ))}
        </div>
      </section>
      {/* Öne Çıkan Ürünler */}
      <section className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {urunler.map((urun) => (
            <div key={urun.ad} className="bg-white shadow-sm rounded-xl p-6 flex flex-col gap-3 border border-blue-100 hover:scale-105 hover:shadow-md transition-all duration-200 items-center">
              <img src={urun.img} alt="" className="w-16 h-16 mb-2 opacity-80" />
              <span className="font-semibold text-blue-900 text-lg text-center">{urun.ad}</span>
              <span className="text-sm text-gray-500">{urun.kategori}</span>
              <a href={urun.link} className="text-blue-700 hover:underline text-sm mt-2">Detay</a>
            </div>
          ))}
        </div>
      </section>
      {/* Neden Yönel Ticaret */}
      <section className="bg-blue-50 rounded-2xl shadow p-8 max-w-3xl mx-auto text-center mt-8 border border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Neden Yönel Ticaret?</h3>
        <p className="text-blue-800 text-lg">Hızlı kargo, orijinal ve muadil yedek parça seçenekleri, uygun fiyat ve müşteri memnuniyeti odaklı hizmet ile sektörde güvenilir adresiniz!</p>
      </section>
    </div>
  );
}
