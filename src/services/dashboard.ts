import instance from "@/libs/axios/instance";
import endpoint from "./endpointConstan";

const dashboardServices = {
  getDashboard: async () => {
    const res = await instance.get(`${endpoint.MAHASISWA}/dashboard`);
    return res.data;

    console.log(res);
  },
};

export default dashboardServices;
