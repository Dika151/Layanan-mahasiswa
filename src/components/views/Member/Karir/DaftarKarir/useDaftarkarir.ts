import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import beasiswaService from "@/services/beasiswa";
import { IBeasiswaForm } from "@/types/daftarbeasiswa";

// =============== SCHEMA VALIDASI ===============

export const KarirSchema = yup.object().shape({
  nama: yup.string().required("Nama wajib diisi"),
  email: yup.string().required("Email wajib diisi"),
  status_mahasiswa: yup.string().required("Status Mahasiswa wajib diisi"),
  posisi_lamaran: yup.string().required("Posisi Lamaran wajib diisi"),
  nama_perusahaan: yup.string().required("Nama Perusahaan wajib diisi"),

  cv: yup
    .mixed<File>()
    .nullable()
    .required("cv wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  surat_lamaran: yup
    .mixed<File>()
    .nullable()
    .required("surat lamaran wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  portofolio: yup
    .mixed<File>()
    .nullable()
    .required("portofolio wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),

  sertifikat: yup
    .mixed<File>()
    .nullable()
    .required("sertifikat wajib diunggah")
    .test("fileRequired", "File tidak boleh kosong", (value) => value instanceof File),
});


// =============== HOOKS FORM ===============
const useKarirForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(KarirSchema),
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
      router.push("daftarkarir/succes");
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

export default useKarirForm;
