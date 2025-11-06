import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ilogin } from "@/types/sign";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import signServices from "@/services/sign";

const loginSchema = yup.object().shape({
  username: yup.string().required("Mohon masukkan Nama atau NIM"),
  password: yup.string().required("Mohon masukkan password"),
});
const useLogin = () => {
  const router = useRouter();
  const callbackUrl: string = (router.query.callbackURL as string) || "/";
  // handle visible password
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
  });
  const handleVisiblePassword = (key: "password") => {
    setVisiblePassword({
      ...visiblePassword,
      [key]: !visiblePassword[key],
    });
  };
  // end handle visible password

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // const loginService = async (payload: Ilogin) => {
  //   const result = await signServices.login(payload);
  //   return result;
  //   // if (result.status === 401) {
  //   //   throw new Error("Nama/NIM atau password tidak sesuai");
  //   // }
  // };
  const loginService = async (payload: Ilogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (result?.error && result.status === 401) {
      throw new Error("Nama/NIM atau password tidak sesuai");
    }
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError(error) {
      setError("root", { message: error.message });
    },
    onSuccess() {
      router.push('/member');
      reset();
    },
  });

  const handleLogin = (data: Ilogin) => mutateLogin(data);

  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    errors,
    handleLogin,
    isPendingLogin,
  };
};
export default useLogin;
