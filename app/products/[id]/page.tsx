type ProductPageProps = {
  params: { id: string };
};

// Simulasi data produk
const produkList: Record<string, { nama: string; harga: string; deskripsi: string }> = {
  "1": {
    nama: "Sepatu Sneakers",
    harga: "Rp 350.000",
    deskripsi: "Cocok untuk nongkrong dan jalan-jalan.",
  },
  "2": {
    nama: "Jaket Hoodie",
    harga: "Rp 280.000",
    deskripsi: "Nyaman dipakai di cuaca dingin.",
  },
  "3": {
    nama: "Topi Trucker",
    harga: "Rp 90.000",
    deskripsi: "Kasual dan stylish.",
  },
};

export default function ProductPage({ params }: ProductPageProps) {
  const produk = produkList[params.id];

  if (!produk) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Produk tidak ditemukan</h1>
        <p>ID: {params.id}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{produk.nama}</h1>
      <p><strong>Harga:</strong> {produk.harga}</p>
      <p><strong>Deskripsi:</strong> {produk.deskripsi}</p>
    </div>
  );
}