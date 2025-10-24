import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/login";
const LoginPage = () => {
  return (
    <AuthLayout title="Login | Layanan Mahasiswa">
        <Login />
    </AuthLayout>
  );
};
export default LoginPage;