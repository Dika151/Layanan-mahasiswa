import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const DaftarKarirSucces = () => {
    const router = useRouter();
  return (
    <div className="w-screen flex flex-col gap-4 items-center justify-center text-center py-20 px-4">
      <h1 className="text-[#5318A8] font-bold text-4xl">
       Pendaftaran berhasil <br /> Terkirim!
      </h1>
      <p className="text-center text-small md:text-base">
       Lamaran Kerjamu sudah kami terima.
       <br /> Kami akan menghubungimu setelah proses selesai
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
export default DaftarKarirSucces;