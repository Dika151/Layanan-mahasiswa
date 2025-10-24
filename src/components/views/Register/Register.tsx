import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
    control,
  } = useRegister();
  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
      <div className="flex flex-col w-full lg:w-1/3 items-center justify-center gap-6 p-8">
        <h1 className="text-4xl font-extrabold text-purple-700 leading-tight ">
          Layanan <br /> Terpadu untuk Mahasiswa
        </h1>
        <p className="text-gray-950">
          Ajukan aduan, temukan besiswa dan jelajahi peluang karir tanpa ribet.{" "}
          <br />
          Semua bisa kamu lakukan langsung dari satu tempat.
        </p>
      </div>
      <div className="">
        <Card>
          <CardBody className="p-8">
            <h2 className="text-xl font-bold text-purple-800 ">Buat Akun</h2>
            <p className="text-small mb-4">
              Sudah punya Akun?&nbsp;
              <Link
                href="/auth/login "
                className="text-purple-700 font-semibold"
              >
                Login disini
              </Link>
            </p>
            {errors.root && (
              <p className="text-purple-700 mb-2 font-medium">
                {errors?.root?.message}
              </p>
            )}
            <form
              className={cn(
                "w-full grid grid-cols-1 md:grid-cols-2",
                Object.keys(errors).length > 0 ? "gap-2" : "gap-4"
              )}
              onSubmit={handleSubmit(handleRegister)}
            >
              <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nama"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.nama !== undefined}
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
                    label="Nim"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.nim !== undefined}
                    errorMessage={errors.nim?.message}
                  />
                )}
              />
              <Controller
                name="programStudi"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Program Studi"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.programStudi !== undefined}
                    errorMessage={errors.programStudi?.message}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nomor Telepon"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.phoneNumber !== undefined}
                    errorMessage={errors.phoneNumber?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    label="email"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={visiblePassword.password ? "text" : "password"}
                    label="Password"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => handleVisiblePassword("password")}
                      >
                        {visiblePassword.password ? (
                          <FaEye className="text-xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                  />
                )}
              />

              <Button color="secondary" size="lg" type="submit" radius="full">
                {isPendingRegister ? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "Buat Akun!!!"
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Register;
