import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import useLogin from "./useLogin";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Login = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
    control,
  } = useLogin();
  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
      <div className="flex flex-col w-full lg:w-1/3 items-center justify-center gap-6 p-8">
        <h1 className="text-4xl font-extrabold text-[#5318A8] leading-tight ">
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
            <h2 className="text-xl font-bold text-[#5318A8] ">Masuk Akun</h2>
            <p className="text-small mb-4">
              Belum punya Akun?&nbsp;
              <Link
                href="/auth/register "
                className="text-[#5318A8] font-semibold"
              >
                Daftar disini
              </Link>
            </p>
            {errors.root && (
              <p className="text-[#5318A8] mb-2 font-medium">
                {errors?.root?.message}
              </p>
            )}
            <form
              className={cn(
                "w-80 flex flex-col ",
                Object.keys(errors).length > 0 ? "gap-2" : "gap-4"
              )}
              onSubmit={handleSubmit(handleLogin)}
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nim / Username"
                    labelPlacement="outside"
                    variant="bordered"
                    autoComplete="none"
                    isInvalid={errors.username !== undefined}
                    errorMessage={errors.username?.message}
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

              <Button  size="lg" type="submit" radius="full" className="bg-[#5318A8]">
                {isPendingLogin ? (
                  <Spinner color="white" size="sm" />
                ) : (
                  "Masuk akun!"
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Login;
