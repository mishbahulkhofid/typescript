from abc import ABC, abstractmethod


class KamarHotel(ABC):
    """Abstract base class untuk semua tipe kamar hotel."""

    def __init__(self, nama_kamar, harga_dasar, stok):
        self.nama_kamar = nama_kamar
        self.__harga_dasar = harga_dasar
        self.__stok = stok

    def get_stok(self):
        return self.__stok

    def get_harga_dasar(self):
        return self.__harga_dasar

    def tambah_stok(self, jumlah):
        if jumlah < 0:
            print(f"Gagal update stok {self.nama_kamar}! Stok tidak boleh negatif ({jumlah}).")
            return False
        else:
            self.__stok += jumlah
            print(f"Berhasil menambahkan stok {self.nama_kamar}: {jumlah} unit.")
            return True

    @abstractmethod
    def tampilkan_detail(self):
        pass

    @abstractmethod
    def hitung_harga_total(self, jumlah_malam):
        pass


class KamarDeluxe(KamarHotel):
    def __init__(self, nama_kamar, harga_dasar, stok, fasilitas):
        super().__init__(nama_kamar, harga_dasar, stok)
        self.fasilitas = fasilitas
        self.persen_pajak = 0.10

    def hitung_harga_total(self, jumlah_malam):
        harga_dasar = self.get_harga_dasar()
        pajak = harga_dasar * self.persen_pajak
        return (harga_dasar + pajak) * jumlah_malam

    def tampilkan_detail(self, jumlah_malam):
        harga_dasar = self.get_harga_dasar()
        pajak = harga_dasar * self.persen_pajak
        subtotal = self.hitung_harga_total(jumlah_malam)
        print(f"[DELUXE] {self.nama_kamar} | Fasilitas: {self.fasilitas}")
        print(f"   Harga Dasar/Malam: Rp {harga_dasar:,.0f} | Pajak(10%): Rp {pajak:,.0f}".replace(",", "."))
        print(f"   Menginap: {jumlah_malam} malam | Subtotal: Rp {subtotal:,.0f}".replace(",", "."))
        return subtotal


class KamarStandard(KamarHotel):
    def __init__(self, nama_kamar, harga_dasar, stok, kapasitas):
        super().__init__(nama_kamar, harga_dasar, stok)
        self.kapasitas = kapasitas
        self.persen_pajak = 0.05

    def hitung_harga_total(self, jumlah_malam):
        harga_dasar = self.get_harga_dasar()
        pajak = harga_dasar * self.persen_pajak
        return (harga_dasar + pajak) * jumlah_malam

    def tampilkan_detail(self, jumlah_malam):
        harga_dasar = self.get_harga_dasar()
        pajak = harga_dasar * self.persen_pajak
        subtotal = self.hitung_harga_total(jumlah_malam)
        print(f"[STANDARD] {self.nama_kamar} | Kapasitas: {self.kapasitas}")
        print(f"   Harga Dasar/Malam: Rp {harga_dasar:,.0f} | Pajak(5%): Rp {pajak:,.0f}".replace(",", "."))
        print(f"   Menginap: {jumlah_malam} malam | Subtotal: Rp {subtotal:,.0f}".replace(",", "."))
        return subtotal


def proses_transaksi(daftar_pesanan):
    print("--- STRUK PEMESANAN ---")
    total_tagihan = 0
    for idx, (kamar, jumlah_malam) in enumerate(daftar_pesanan, start=1):
        print(f"{idx}.", end=" ")
        subtotal = kamar.tampilkan_detail(jumlah_malam)
        total_tagihan += subtotal
        print()
    print("----------------------------------------")
    print(f"TOTAL TAGIHAN: Rp {total_tagihan:,.0f}".replace(",", "."))
    print("----------------------------------------")
    return total_tagihan


if __name__ == "__main__":
    deluxe = KamarDeluxe("Kamar Deluxe Sea View", 1_500_000, 0, "Private Pool")
    standard = KamarStandard("Kamar Standard Superior", 500_000, 0, "2 Orang")

    print("--- SETUP DATA KAMAR ---")
    deluxe.tambah_stok(10)
    standard.tambah_stok(-5)
    standard.tambah_stok(20)
    print()

    daftar_pesanan = [(deluxe, 2), (standard, 1)]
    proses_transaksi(daftar_pesanan)