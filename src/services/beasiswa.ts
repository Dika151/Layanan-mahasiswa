import instance from "@/libs/axios/instance";
import endpoint from "./endpointConstan";
import { BeasiswaDetailsparams } from "@/types/beasiswa";
import { IBeasiswaForm } from "@/types/daftarbeasiswa";

const beasiswaService = {
  getDetailById: (params: BeasiswaDetailsparams) =>
    instance.get(
      `${endpoint.MAHASISWA}/beasiswa-detail/${params.id_beasiswa}`
    ),
  submitBeasiswa: (payload: IBeasiswaForm) =>
    instance.post(`${endpoint.MAHASISWA}/beasiswa-pendaftaran`, payload),
};  

export default beasiswaService;
