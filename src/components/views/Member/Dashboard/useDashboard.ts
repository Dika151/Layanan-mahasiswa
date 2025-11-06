import { useQuery } from "@tanstack/react-query";
import dashboardServices from "@/services/dashboard";

export const useDashboard = () => {
  // Ambil data dashboard pakai react-query
  const {
    data: dashboardData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => dashboardServices.getDashboard(),
  });

  // kalau kamu mau nambah fungsi lain (misal refresh manual / post data)
  // bisa ditaruh di sini juga
  

  return {
    dashboardData,
    isLoading,
    isError,
    refetch,
  };
};
