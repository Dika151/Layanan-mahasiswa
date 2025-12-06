import DaftarKarir from "@/components/views/Member/Karir/DaftarKarir";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const DaftarKarirPage = () => {
    return (
        <DashboardLayout title="Member Daftar Karir | Layanan Mahasiswa " type="member">
            <DaftarKarir />
        </DashboardLayout>
    );
}
export default DaftarKarirPage;