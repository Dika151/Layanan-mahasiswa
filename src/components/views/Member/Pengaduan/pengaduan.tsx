import { MdNotifications } from "react-icons/md";
import usePengaduan from "./usePengaduan";
import { Avatar, Card, CardBody, Input } from "@nextui-org/react";
import { cn } from "@/utils/cn";
import { Controller } from "react-hook-form";

const Pengaduan = () => {
  const { control, handleSubmit, errors, reset, onSubmit } = usePengaduan();
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
          <Avatar src="logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">dika</p>
        </div>
      </div>
      <div>
        <Card className="p-6 shadow-md rounded-2xl max-w-6xl mx-auto">
          <CardBody className="p-8">
            <h2 className="bg-[#5318A8] font-semibold rounded-lg p-2 w-60 text-white text-center">
              Formulir Pengaduan
            </h2>
            <form
              className={cn(
                "w-80 flex flex-col gap-4 mt-6",
                Object.keys(errors).length > 0 ? "gap-2" : "gap-4"
              )}
            //   onSubmit={handleSubmit(handleRegister)}
            
            >
                <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nama Lengkap"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.nama !== undefined}
                    errorMessage={errors.nama?.message}
                  />
                )}
              />
                <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nim"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.nama !== undefined}
                    errorMessage={errors.nama?.message}
                  />
                )}
              />
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Pengaduan;
