import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailBeasiswa from "@/components/views/Member/Beasiswa/DetailBeasiswa";
const DetailBeasiswaPage = () => {
  return (
    <DashboardLayout title="Detail Beasiswa | Layanan Mahasiswa " type="member">
       <DetailBeasiswa/>
    </DashboardLayout>
  );
};
export default DetailBeasiswaPage;