import instance from "@/libs/axios/instance";
import endpoint from "./endpointConstan";
import { Iregister, Ilogin } from "@/types/sign";

const signServices = {
  register: (payload: Iregister) =>
    instance.post(`${endpoint.SIGN}/register/mahasiswa`, payload),
  login: (payload: Ilogin) => instance.post(`${endpoint.SIGN}/login/mahasiswa`, payload),
  getProfile: (token: string) =>
    instance.get(`${endpoint.SIGN}/authentication`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
export default signServices;
