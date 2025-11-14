import { MdNotifications } from "react-icons/md";
import usePengaduan from "./usePengaduan";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { cn } from "@/utils/cn";
import { Controller } from "react-hook-form";

const Pengaduan = () => {
  const {
    control,
    handleSubmit,
    errors,
    reset,
    onSubmit,
    handlePengaduan,
    isPendingPengaduan,
  } = usePengaduan();
  return (
    <div className="min-h-screen bg-white p-6 w-full">
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#5318A8]  ">
            Aduan <br /> Mahasiswa
          </h1>
          <p className="text-[#000000] text-sm mt-2">
            Sampaikan kendala, kritik, atau saran terkait layanan kampus.
            <br />
            Setiap suara kamu berarti untuk perbaikan bersama.
          </p>
        </div>
        <div className="flex text-2xl items-center px-8 gap-2 ">
          <MdNotifications className="text-[#5318A8]" size={40} />
          |
          <Avatar src="/logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">dika</p>
        </div>
      </div>
      <div>
        <Card className="p-8 rounded-2xl max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start bg-white shadow-md">
          {/* Bagian Form Pengaduan */}
          <CardBody className="p-0 md:w-1/2 w-full">
            <h2 className="bg-[#5318A8] font-semibold rounded-lg p-2 w-full md:w-64 text-white text-center mx-auto md:mx-0">
              Formulir Pengaduan
            </h2>
            <form
              className={cn(
                "w-full flex flex-col mt-6",
                Object.keys(errors).length > 0 ? "gap-3" : "gap-5"
              )}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={!!errors.nama}
                    errorMessage={errors.nama?.message}
                  />
                )}
              />

              <Controller
                name="nim"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="NIM"
                    placeholder="NIM"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={!!errors.nim}
                    errorMessage={errors.nim?.message}
                  />
                )}
              />

              <Controller
                name="kategori"
                control={control}
                render={({ field }) => (
                  <Select
                    selectedKeys={field.value ? [field.value] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string;
                      field.onChange(selected);
                    }}
                    label="Kategori Pengaduan"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Pilih Kategori aduan"
                    className="w-full"
                    isInvalid={!!errors.kategori}
                    errorMessage={errors.kategori?.message}
                  >
                    <SelectItem key="akademik">Akademik</SelectItem>
                    <SelectItem key="keuangan">Keuangan</SelectItem>
                    <SelectItem key="fasilitas">Fasilitas Kampus</SelectItem>
                    <SelectItem key="dosen/staff">Dosen / Staff</SelectItem>
                    <SelectItem key="lainnya">Lainnya</SelectItem>
                  </Select>
                )}
              />

              <Controller
                name="deskripsi"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Deskripsi Pengaduan"
                    placeholder="Jelaskan aduan Anda secara rinci"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={!!errors.deskripsi}
                    errorMessage={errors.deskripsi?.message}
                  />
                )}
              />

              <div className="flex gap-3 justify-end mt-4">
                <Button
                  variant="bordered"
                  color="secondary"
                  size="sm"
                  className="w-24"
                  type="button"
                  onClick={() => reset()}
                >
                  Batal
                </Button>
                <Button
                  color="secondary"
                  size="sm"
                  className="w-24"
                  type="submit"
                >
                  {isPendingPengaduan? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "Kirim"
                )}
                </Button>
              </div>
            </form>
          </CardBody>

          {/* Bagian Riwayat Pengaduan */}
          <div className="md:w-1/2 w-full  bg-[#ffff] p-6 rounded-xl shadow-md items-center">
            <h2 className="bg-[#ffff] font-semibold rounded-lg p-2 w-full md:w-64 text-black text-center mx-auto md:mx-0 mb-4 border-[#2A0C54] border-1">
              Riwayat Pengaduan
            </h2>
            <Table aria-label="Tabel Riwayat Pengaduan" removeWrapper>
              <TableHeader>
                <TableColumn>No</TableColumn>
                <TableColumn>Judul Pengaduan</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1</TableCell>
                  <TableCell>Fasilitas WiFi di Kampus</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>2</TableCell>
                  <TableCell>Kebersihan Toilet</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Pengaduan;
