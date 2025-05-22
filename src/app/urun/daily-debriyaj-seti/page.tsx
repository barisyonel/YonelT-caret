"use client";
import { useRouter } from "next/navigation";

export default function DailyDebriyajSetiPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-2">
      <button onClick={() => router.back()} className="mb-4 w-max px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded shadow-sm border border-gray-200 text-sm font-medium">← Geri</button>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center max-w-3xl w-full border border-blue-100">
        {/* Görsel veya sembol */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-1/3">
          <span className="text-7xl mb-4">🚚</span>
          <img src="/placeholder-part.svg" alt="Daily Debriyaj Seti" className="w-32 h-32 mb-2 opacity-80 hidden" />
        </div>
        {/* Bilgi alanı */}
        <div className="flex-1 flex flex-col gap-3 w-full">
          <h1 className="text-3xl font-bold text-blue-900 mb-1">Daily Debriyaj Seti</h1>
          <div className="text-blue-800 font-semibold mb-2">Kategori: Iveco / Daily</div>
          <div className="text-gray-700 text-lg mb-2">Iveco Daily modelleri için yüksek kaliteli debriyaj seti. Dayanıklı, uzun ömürlü ve orijinal uyumlu yedek parça.</div>
          <div className="bg-blue-50 rounded p-4 text-sm text-blue-900 mb-2">
            <div className="font-semibold mb-1">Teknik Özellikler</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Uyumlu Modeller: Iveco Daily 2010-2022</li>
              <li>Malzeme: Yüksek dayanımlı çelik</li>
              <li>Garanti: 2 Yıl</li>
              <li>Stok Durumu: Var</li>
            </ul>
          </div>
          <a href="https://wa.me/905414873365" target="_blank" rel="noopener" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-all w-max">Sipariş & Destek</a>
        </div>
      </div>
    </div>
  );
} 