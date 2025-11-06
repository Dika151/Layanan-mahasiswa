import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IPengaduan {
  nama?: string;
  nim?: string;
  kategori?: string;
  deskripsi?: string;
}

const pengaduanSchema = yup.object({
  nama: yup.string().required("Nama wajib diisi"),
  nim: yup.string().required("NIM wajib diisi"),
  kategori: yup.string().required("Kategori wajib dipilih"),
  deskripsi: yup.string().required("Deskripsi wajib diisi"),
});

const usePengaduan = () => {
  const {
      control,
      handleSubmit,
      formState: { errors }, 
      reset,
      setError,
    } = useForm({
      resolver: yupResolver(pengaduanSchema),
    });

  const onSubmit = (data: IPengaduan) => {
    console.log("Data aduan:", data);
    alert("Aduan berhasil dikirim ✅");
    reset();
  };

  return {
    control,
    handleSubmit,
    errors,
    reset,
    onSubmit,
  };
};
export default usePengaduan;
