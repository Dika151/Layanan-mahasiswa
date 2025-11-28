import DashboardLayout from "@/components/layouts/DashboardLayout";
import Beasiswa from "@/components/views/Member/Beasiswa";
const BeasiswaPage = () => {
  return (
    <DashboardLayout title="Beasiswa | Layanan Mahasiswa " type="member">
       <Beasiswa/>
    </DashboardLayout>
  );
};
export default BeasiswaPage;