import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import beasiswaService from "@/services/beasiswa";
import { IBeasiswaForm } from "@/types/daftarbeasiswa";

// =============== SCHEMA VALIDASI ===============

export const beasiswaSchema = yup.object().shape({
  nama: yup.string().required("Nama wajib diisi"),
  nim: yup.string().required("NIM wajib diisi"),
  prodi: yup.string().required("Program studi wajib diisi"),
  semester: yup.string().required("Semester wajib diisi"),
  ipk: yup.string().required("IPK wajib diisi"),

  ktm: yup
    .mixed<File>()
    .nullable()
    .required("KTM wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  transkrip: yup
    .mixed<File>()
    .nullable()
    .required("Transkrip wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  rekomendasi: yup
    .mixed<File>()
    .nullable()
    .required("Surat rekomendasi wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  krs: yup
    .mixed<File>()
    .nullable()
    .required("KRS wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),
});


// =============== HOOKS FORM ===============
const useBeasiswaForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(beasiswaSchema),
  });

  // Service
  const beasiswaSubmitService = async (payload: IBeasiswaForm) => {
    const result = await beasiswaService.submitBeasiswa(payload);
    return result;
  };

  // Mutation
  const { mutate: mutateBeasiswa, isPending: isPendingBeasiswa } = useMutation({
    mutationFn: beasiswaSubmitService,
    onError(error) {
      setError("root", { message: error.message });
    },
    onSuccess() {
      router.push("daftarbeasiswa/succes");
      reset();
    },
  });

  // Handler ketika tombol submit ditekan
  const handleBeasiswaSubmit = (data: IBeasiswaForm) => {
    mutateBeasiswa(data);
  };

  const onSubmitDebug = (data: any) => {
    console.log("📋 Data Form Beasiswa:", data);
    console.log("📋 Errors:", errors);
    handleBeasiswaSubmit(data);
    alert("Check console for form data and errors.");
    router.push("daftarbeasiswa/succes");
  };

  return {
    control,
    handleSubmit,
    errors,
    isPendingBeasiswa,
    handleBeasiswaSubmit,
    reset,
    onSubmitDebug,
  };
};

export default useBeasiswaForm;
