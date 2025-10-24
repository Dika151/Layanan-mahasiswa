import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Member/Dashboard";
const DashboardMemberPage = () => {
  return (
    <DashboardLayout title="DashboardMember | Layanan Mahasiswa " type="member">
        <Dashboard />
    </DashboardLayout>
  );
};
export default DashboardMemberPage;