import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

interface RiwayatItem {
  tanggal: string;
  aktivitas: string;
  status: "Dikirim" | "Diproses" | "Selesai";
}

const data: RiwayatItem[] = [
  {
    tanggal: "07 Okt 2025",
    aktivitas: "Mahasiswa mengajukan beasiswa PPA",
    status: "Dikirim",
  },
  {
    tanggal: "18 Sep 2025",
    aktivitas: 'Pengaduan "WiFi kampus error"',
    status: "Diproses",
  },
  {
    tanggal: "15 Sep 2025",
    aktivitas: "Lowongan karir baru ditambahkan",
    status: "Selesai",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Dikirim":
      return "text-red-500";
    case "Diproses":
      return "text-yellow-500";
    case "Selesai":
      return "text-green-500";
    default:
      return "";
  }
};

const TableRiwayat = () => {
    const router = useRouter();
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <h2 className="text-sm font-semibold mb-3">Riwayat</h2>
      <Table aria-label="Tabel Riwayat">
        <TableHeader>
          <TableColumn>Tanggal</TableColumn>
          <TableColumn>Aktivitas</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Aksi</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.tanggal}</TableCell>
              <TableCell>{item.aktivitas}</TableCell>
              <TableCell>
                <span
                  className={`font-semibold ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  variant="light"
                  className="text-[#5318A8] font-semibold"
                >
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <Button
          color="primary"
          className="bg-[#5318A8] text-white font-medium rounded-lg px-6 py-2"
          startContent={<FaPlus />}
          onClick={() => router.push('/member/pengaduan')}
        >
          Ajukan Pengaduan Baru
        </Button>
      </div>
    </div>
  );
};

export default TableRiwayat;
