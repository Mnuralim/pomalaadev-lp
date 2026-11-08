export interface ChatMessage {
  from: "client" | "us";
  text: string;
}

export const chatConversations: ChatMessage[][] = [
  [
    { from: "client", text: "Tabe', mau ka bikin CV buat lamar di tambang. Bisa ji?" },
    { from: "us", text: "Bisa sekali kak. Kirim mi CV lama ta' sama lowongannya, kami rapikan supaya gampang dibaca sistem HRD." },
    { from: "client", text: "Sekalian surat lamarannya bisa ji?" },
    { from: "us", text: "Bisa kak, kami bikinkan yang nda kaku dan sesuai lowongan ta'." },
  ],
  [
    { from: "client", text: "Tabe', di kantor masih pakai Excel ka catat jam kerja alat berat. Ribet sekali." },
    { from: "us", text: "Bisa dibikinkan aplikasi kak. Operator isi dari HP, laporannya langsung jadi." },
    { from: "client", text: "Mahal ji itu?" },
    { from: "us", text: "Tergantung fiturnya kak. Cerita mi dulu alurnya, kami hitungkan. Gratis ji konsultasinya." },
  ],
  [
    { from: "client", text: "Kak, bingung ka di Coretax, nda bisa-bisa login 😅" },
    { from: "us", text: "Santai mami kak. Kita bantu aktivasi akunnya dulu, di'." },
    { from: "client", text: "Sekalian lapor SPT tahunan bisa ji?" },
    { from: "us", text: "Bisa kak. Siapkan mi bukti potong dari kantor ta', kami urus sampai beres." },
  ],
  [
    { from: "client", text: "Kak, tugas akhir ku aplikasi Android, macet ka di database." },
    { from: "us", text: "Bisa kak, kami dampingi. Kirim mi dulu kodenya, kita cek sama-sama." },
    { from: "client", text: "Dikerjakan semua ji?" },
    { from: "us", text: "Nda kak, kami ajari sampai ki paham, biar lancar waktu sidang." },
  ],
];
