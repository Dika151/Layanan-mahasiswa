import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPengaduan } from "@/types/pengaduan";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import pengaduanServices from "@/services/pengaduan";

const pengaduanSchema = yup.object({
  nama: yup.string().required("Nama wajib diisi"),
  nim: yup.string().required("NIM wajib diisi"),
  kategori: yup.string().required("Kategori wajib dipilih"),
  deskripsi: yup.string().required("Deskripsi wajib diisi"),
});

const usePengaduan = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    setValue,
  } = useForm({
    resolver: yupResolver(pengaduanSchema),
  });

  const pengaduanService = async (payload: IPengaduan) => {
    const result = await pengaduanServices.pengaduan(payload);
    return result;
  };

  const { mutate: mutatePengaduan, isPending: isPendingPengaduan } =
    useMutation({
      mutationFn: pengaduanService,
      onError(error) {
        setError("root", { message: error.message });
      },
      onSuccess() {
        router.push("pengaduan/success");
        reset();
      },
    });

  const handlePengaduan = (data: IPengaduan) => mutatePengaduan(data);

  const onSubmit = (data: IPengaduan) => {
    console.log("Data aduan:", data);
    alert("Aduan berhasil dikirim ✅");
    reset();
    router.push("pengaduan/success");
    
  };

  return {
    control,
    handleSubmit,
    errors,
    reset,
    onSubmit,
    isPendingPengaduan,
    handlePengaduan
  };
};
export default usePengaduan;
