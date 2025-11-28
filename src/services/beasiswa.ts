import instance from "@/libs/axios/instance";
import endpoint from "./endpointConstan";
import { BeasiswaDetailParams } from "@/types/beasiswa";

const beasiswaService = {
  getDetailById: (params: BeasiswaDetailParams) =>
    instance.get(
      `${endpoint.MAHASISWA}/beasiswa-detail/${params.id_beasiswa}`
    ),
};  

export default beasiswaService;
