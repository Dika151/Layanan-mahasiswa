import { use, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Iregister } from "@/types/sign";
import signServices from "@/services/sign";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const registerSchema = yup.object().shape({
  nama: yup.string().required("Mohon masukkan nama lengkap"),
  nim: yup
    .string()
    .matches(/^[0-9]+$/, "NIM harus berupa angka")
    .required("Mohon masukkan NIM"),
  programStudi: yup.string().required("Mohon masukkan program studi"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Nomor telepon harus berupa angka")
    .required("Mohon masukkan nomor telepon"),
  email: yup
    .string()
    .email("Mohon masukkan email yang valid")
    .required("Mohon masukkan email"),
  password: yup
    .string()
    .min(8, "Password minimal 6 karakter")
    .required("Mohon masukkan password"),
});
const useRegister = () => {
  const router = useRouter();
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
    resolver: yupResolver(registerSchema),
  });

  const registerService = async (payload: Iregister) => {
    const result = await signServices.register(payload);
    return result;
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerService,
    onError(error) {
      setError("root", { message: error.message });
    },
    onSuccess() {
      router.push("/auth/login");
      reset();
    },
  });

  const handleRegister = (data: Iregister) => mutateRegister(data);

  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    errors,
    handleRegister,
    isPendingRegister,
    
  };
};
export default useRegister;
