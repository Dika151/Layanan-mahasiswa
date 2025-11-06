import DashboardLayout from "@/components/layouts/DashboardLayout";
import Pengaduan from "@/components/views/Member/Pengaduan";
const DashboardMemberPage = () => {
  return (
    <DashboardLayout title="MemberPengaduan | Layanan Mahasiswa " type="member">
       < Pengaduan />
    </DashboardLayout>
  );
};
export default DashboardMemberPage;