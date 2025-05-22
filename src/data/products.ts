export type Product = {
  id: number;
  ad: string;
  kategori: string;
  aciklama: string;
  img: string;
};

const kategoriler = [
  "Iveco / Daily",
  "Iveco / Eurocargo",
  "Eurobus / Fren",
  "Eurobus / Motor",
  "Ducato / Motor",
  "Ducato / Elektrik",
  "Karataş Traktör / Motor",
  "Karataş Traktör / Fren",
  "Foton Traktör / Motor",
  "Foton Traktör / Elektrik",
];

const urunAdlari = [
  "Debriyaj Seti",
  "Fren Balatası",
  "Yağ Filtresi",
  "Mazot Pompası",
  "Hava Filtresi",
  "Far",
  "V Kayışı",
  "Termostat",
  "Radyatör",
  "Amortisör",
  "Aks Kafası",
  "Şanzıman Dişlisi",
  "Volant",
  "Enjektör",
  "Turbo",
];

export const products: Product[] = Array.from({ length: 150 }, (_, i) => {
  const kategori = kategoriler[Math.floor(Math.random() * kategoriler.length)];
  const urun = urunAdlari[Math.floor(Math.random() * urunAdlari.length)];
  return {
    id: i + 1,
    ad: `${kategori.split("/")[0].trim()} ${urun}`,
    kategori,
    aciklama: `${kategori.split("/")[0].trim()} araçlar için kaliteli ${urun.toLowerCase()}.`,
    img: "/placeholder-part.svg",
  };
});

// Not: 150 ürünü otomatik oluşturmak için bir script veya döngü de kullanılabilir. 