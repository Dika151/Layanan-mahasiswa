import DashboardLayout from "@/components/layouts/DashboardLayout";
import Daftarbeasiswa from "@/components/views/Member/Beasiswa/DaftarBeasiswa";
const BeasiswaPage = () => {
  return (
    <DashboardLayout title="Pendaftaran Beasiswa | Layanan Mahasiswa " type="member">
        <Daftarbeasiswa/>
    </DashboardLayout>
  );
};
export default BeasiswaPage;