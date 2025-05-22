"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

export default function KaratasTraktorPage() {
  const router = useRouter();
  const karatasUrunler = products.filter(p => p.kategori.startsWith("Karataş Traktör"));
  return (
    <div className="flex flex-col gap-10 px-4 md:px-12">
      <button onClick={() => router.back()} className="mb-2 w-max px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded shadow-sm border border-gray-200 text-sm font-medium">← Geri</button>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Karataş Traktör Ürünleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {karatasUrunler.map((urun) => (
            <Link key={urun.id} href={"#"} className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center gap-3 border border-blue-100 hover:scale-105 hover:shadow-md transition-all duration-200">
              <img src={urun.img} alt="" className="w-16 h-16 mb-2 opacity-80" />
              <span className="font-semibold text-blue-900 text-lg text-center">{urun.ad}</span>
              <span className="text-gray-500 text-sm mb-1">{urun.kategori}</span>
              <span className="text-gray-600 text-xs mb-2 text-center">{urun.aciklama}</span>
              <span className="text-blue-700 hover:underline text-sm mt-2">Detay</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 