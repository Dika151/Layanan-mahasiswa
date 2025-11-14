import instance from "@/libs/axios/instance";
import endpoint from "./endpointConstan";
import { IPengaduan } from "@/types/pengaduan";

const pengaduanServices = {
    pengaduan: (payload: IPengaduan )=>
    instance.post(`${endpoint.MAHASISWA}/pengaduan`, payload),

};
export default pengaduanServices;