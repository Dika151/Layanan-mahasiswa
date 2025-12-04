import { Avatar, Button, Card, CardBody, CardHeader, Input, Spinner } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { MdNotifications } from "react-icons/md";
import useBeasiswaForm from "./useDaftarBeasiswa";
import { cn } from "@/utils/cn";
import InputDropzone from "./inputDropzone";
import { on } from "events";

const Daftarbeasiswa = () => {
  const {
    control,
    handleSubmit,
    errors,
    isPendingBeasiswa,
    handleBeasiswaSubmit,
    reset,
    onSubmitDebug
  } = useBeasiswaForm();
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#5318A8] text">
            Beasiswa
            <br />
            Mahasiswa
          </h1>
          <p className="text-small">
            lengkapi data di bawah ini untuk mengikuti program beasiswa yang{" "}
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
                name="nim"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="NIM"
                    placeholder="NIM"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.nim}
                    errorMessage={errors.nim?.message}
                  />
                )}
              />
              <Controller
                name="prodi"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Program Studi"
                    placeholder="Program Studi"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.prodi}
                    errorMessage={errors.prodi?.message}
                  />
                )}
              />

              {/* Semester */}
              <Controller
                name="semester"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Semester Saat Ini"
                    placeholder="Semester"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.semester}
                    errorMessage={errors.semester?.message}
                  />
                )}
              />

              {/* IPK */}
              <Controller
                name="ipk"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="IPK Terakhir"
                    placeholder="IPK"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={!!errors.ipk}
                    errorMessage={errors.ipk?.message}
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
                name="ktm"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="KTM"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.ktm?.message}
                  />
                )}
              />
              <Controller
                name="transkrip"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="TRANSKRIP"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.transkrip?.message}
                  />
                )}
              />
              <Controller
                name="rekomendasi"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="Surat Rekomendasi"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.rekomendasi?.message}
                  />
                )}
              />
              <Controller
                name="krs"
                control={control}
                render={({ field }) => (
                  <InputDropzone
                    
                    label="KRS"
                    onChange={(file) => field.onChange(file)}
                    errorMessage={errors.krs?.message}
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
export default Daftarbeasiswa;
