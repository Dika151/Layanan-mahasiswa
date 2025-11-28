import { useQuery } from "@tanstack/react-query";
import beasiswaService from "@/services/beasiswa";
import { BeasiswaDetailParams } from "@/types/beasiswa";


const useBeasiswaDetail = (params: BeasiswaDetailParams) => {
  // fungsi service mirip pola registerService
  const detailBeasiswa = async () => {
    const result = await beasiswaService.getDetailById(params);
    return result.data; // 
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["beasiswa-detail", params],
    queryFn: detailBeasiswa,
    enabled: !!params?.id_beasiswa, 
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useBeasiswaDetail;
