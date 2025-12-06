import { Avatar, Button, Card, CardBody, CardHeader, Input, Spinner } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { MdNotifications } from "react-icons/md";
import { cn } from "@/utils/cn";
import InputDropzone from "./inputDropzone";
import { on } from "events";
import useKarirForm from "./useDaftarkarir";

const DaftarKarir = () => {
  const {
    control,
    handleSubmit,
    errors,
    isPendingBeasiswa,
    handleBeasiswaSubmit,
    reset,
    onSubmitDebug
  } = useKarirForm();
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#5318A8] text">
            Lamaran
            <br />
            Kerja
          </h1>
          <p className="text-small">
            Lengkapi data di bawah ini untuk mengajukan lamaran pada posisi{" "}
            <br />
            kamu pilih
          </p>
        </div>
        <div className="flex text-2xl items-center px-8 gap-2 ">
          <MdNotifications className="text-[#5318A8]" size={40} />
          |
          <Avatar src="/logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">dika</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full">
        <Card>
          <CardHeader className="p-6">
            <h1 className="bg-[#5318A8] text-white justify-center items-start rounded-lg p-2  font-semibold ">
              FORMULIR PENDAFTARAN
            </h1>
          </CardHeader>
          <CardBody>
            <form
              className={cn(
                "w-full flex flex-col mt-2",
                Object.keys(errors).length > 0 ? "gap-3" : "gap-5"
              )}
               onSubmit={handleSubmit(onSubmitDebug)}
            >
              <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.nama}
                    errorMessage={errors.nama?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Email"
                    placeholder="Email"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="status_mahasiswa"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="status Mahasiswa"
                    placeholder="status Mahasiswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.status_mahasiswa}
                    errorMessage={errors.status_mahasiswa?.message}
                  />
                )}
              />

              {/* Semester */}
              <Controller
                name="posisi_lamaran"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Posisi Lamaran"
                    placeholder="Posisi Lamaran"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.posisi_lamaran}
                    errorMessage={errors.posisi_lamaran?.message}
                  />
                )}
              />

              {/* IPK */}
              <Controller
                name="nama_perusahaan"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Nama Perusahaan"
                    placeholder="Nama Perusahaan"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.nama_perusahaan}
                    errorMessage={errors.nama_perusahaan?.message}
                  />
                )}
              />
            </form>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="p-6">
            <h1 className="bg-[#5318A8] text-white justify-center items-start rounded-lg p-2  font-semibold ">
              UNGGAH DOKUMEN
            </h1>
          </CardHeader>
          <CardBody>
            <form
              className={cn(
                "w-full flex flex-col mt-2",
                Object.keys(errors).length > 0 ? "gap-3" : "gap-5"
              )}
              onSubmit={handleSubmit(onSubmitDebug)}
            >
              <Controller
                name="cv"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="CV"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.cv?.message}
                  />
                )}
              />
              <Controller
                name="surat_lamaran"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="surat Lamaran"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.surat_lamaran?.message}
                  />
                )}
              />
              <Controller
                name="portofolio"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="Portofolio"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.portofolio?.message}
                  />
                )}
              />
              <Controller
                name="sertifikat"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="Sertifikat"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.sertifikat?.message}
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
                  {isPendingBeasiswa? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "Kirim"
                )}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default DaftarKarir;
