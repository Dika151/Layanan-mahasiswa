import { Card, CardHeader, CardBody, Image, Button, Avatar } from "@nextui-org/react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { useRouter } from "next/router";
import { BeasiswaDetailsparams } from "@/types/beasiswa";



const DetailKarir = () => {
  const router = useRouter();
  const id_beasiswa = router.query.id_beasiswa; //contoh static, nanti ambil dari router param
//   const { data, isLoading, isError } = useBeasiswaDetail({id_beasiswa} as BeasiswaDetailsparams);
  return (
    <div className="p-8">
        <div className="flex text-2xl justify-end items-center px-8 gap-2 mb-8 ">
          <MdNotifications className="text-[#5318A8]" size={40} />
          |
          <Avatar src="/logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">dika</p>
        </div>
      <Card className="shadow-slate-500 rounded-2xl w-full mx-auto">
        {/* ================= IMAGE ================= */}
        <CardHeader className="flex items-center gap-4 pt-6 pb-0 px-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Web Developer Internship
            </h1>
            <p className="text-gray-600 mt-1">PT Kesana Kesini Asik</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwcGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            width={400}
            height={200}
            alt="Logo Beasiswa"
            className="rounded-lg"
          />
        </CardHeader>

        {/* ================= CONTENT ================= */}
        <CardBody className="p-8 flex flex-col gap-8">
          <hr />

          {/* Deskripsi */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Beasiswa adalah program bantuan pendidikan untuk mahasiswa
              berprestasi yang memiliki kepedulian sosial dan aktif
              berkontribusi di masyarakat. Program ini bertujuan untuk membentuk
              generasi unggul dan berdaya saing tinggi.
            </p>
          </div>

          {/* Benefit + Persyaratan */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-100 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-700 mb-2">
                Benefit yang Diterima
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bantuan biaya pendidikan Rp1.000.000/bulan</li>
                <li>• Pelatihan pengembangan diri & leadership</li>
                <li>• Kesempatan bergabung komunitas GenBI</li>
              </ul>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-700 mb-2">
                Persyaratan Umum
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mahasiswa aktif minimal semester 6</li>
                <li>• IPK minimal 3.25</li>
                <li>• Tidak sedang menerima beasiswa lain</li>
                <li>• Aktif dalam organisasi</li>
              </ul>
            </div>
          </div>

          {/* Berkas + Periode */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-5 rounded-xl">
              <h4 className="font-semibold mb-2">Berkas yang Diperlukan</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Scan KTP & KTM</li>
                <li>• Transkrip nilai terakhir</li>
                <li>• Surat rekomendasi dosen</li>
                <li>• Surat pernyataan tidak menerima beasiswa</li>
                <li>• Esai motivasi</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl flex items-start gap-4">
              <FaCalendarAlt className="text-purple-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Periode Pendaftaran</h4>
                <p className="text-sm text-gray-700">10 Juni – 15 Juli 2025</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="bordered" color="secondary" className="px-10" 
            onClick={()=> router.push("/member/karir")}>
              Batal
            </Button>
            <Button
              color="secondary"
              className="px-10 bg-purple-600 text-white"
             onClick={() =>router.push("daftarkarir")}>
              Daftar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailKarir;
