export default function IletisimPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2 text-center">İletişim</h1>
        <div className="flex flex-col gap-4 text-gray-700 text-lg">
          <div className="flex items-center gap-3"><span className="text-2xl">🏢</span> <b>Adres:</b> Yonel Ticaret, Yeniyurt, Ayyıldız Cd. No:22, 60030 Tokat Merkez/Tokat</div>
          <div className="flex items-center gap-3"><span className="text-2xl">📞</span> <b>Telefon:</b> <a href="tel:05542597273" className="text-blue-800 hover:underline">0 (554) 259 72 73</a></div>
          <div className="flex items-center gap-3"><span className="text-2xl">💬</span> <b>Whatsapp:</b> <a href="https://wa.me/905542597273" target="_blank" rel="noopener" className="text-green-700 hover:underline">0 (554) 259 72 73</a></div>
          <div className="flex items-center gap-3"><span className="text-2xl">✉️</span> <b>E-mail:</b> <a href="mailto:info@yonelticaret.com" className="text-blue-800 hover:underline">info@yonelticaret.com</a></div>
        </div>
        <div className="rounded overflow-hidden shadow border border-blue-100">
          <iframe
            title="Yonel Ticaret Harita"
            src="https://www.google.com/maps?q=Yeniyurt,+Ayyıldız+Cd.+No:22,+60030+Tokat+Merkez/Tokat&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
} 