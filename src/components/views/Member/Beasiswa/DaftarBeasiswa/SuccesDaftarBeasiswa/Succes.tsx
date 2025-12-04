import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const DaftarBeasiswaSucces = () => {
    const router = useRouter();
  return (
    <div className="w-screen flex flex-col gap-4 items-center justify-center text-center py-20 px-4">
      <h1 className="text-[#5318A8] font-bold text-4xl">
       Pendaftaran berhasil <br /> Terkirim!
      </h1>
      <p className="text-center text-small md:text-base">
        Pendaftaran beasiswamu sudah kami terima. <br />
         Kami akan menghubungimu setelah proses seleksi selesai.
      </p>
      <Button
        size="sm"
        variant="solid"
        onClick={()=> router.push("/member")}
        className="mt-4 bg-[#5318A8] text-white px-8 font-semibold text-medium "
      >
        {" "}
        Kembali
      </Button>
    </div>
  );
}
export default DaftarBeasiswaSucces;