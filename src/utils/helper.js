export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };
  
  export function formatRupiah(rupiah) {
    return `Rp${rupiah.toLocaleString("id-ID")}`;
  }
  
  export const tanggalPDF = (tanggal) => {
    const bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    const hari = tanggal.getDate();
    const bulanIndex = tanggal.getMonth();
    const tahun = tanggal.getFullYear();
  
    return `${hari} ${bulan[bulanIndex]} ${tahun}`;
  };

  
  export function tanggalFormat(dateString) {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
  
    const parsedDate = new Date(dateString);
    const year = parsedDate.getFullYear();
    const month = months[parsedDate.getMonth()]; // Mengambil nama bulan berdasarkan indeks
    const day = parsedDate.getDate().toString().padStart(2, "0");
  
    return `${day} ${month} ${year}`;
  }