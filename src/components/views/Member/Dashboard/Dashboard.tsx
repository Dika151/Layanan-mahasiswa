import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { defaultStats } from "./cardDashboard";
import TableRiwayat from "./tableRiwayat";
import { useDashboard } from "./useDashboard";

const Dashboard = () => {
  const { dashboardData, isLoading, isError, refetch } = useDashboard();
  const stats = defaultStats.map((item) => {
    console.log(item)
    if (!dashboardData) return item;
    switch (item.key) {
      case "total-aduan":
        return { ...item, value: dashboardData.dashboardCount.totalPengaduan };
      case "total-beasiswa":
        return { ...item, value: dashboardData.dashboardCount.totalBeasiswa };
      case "total-karir":
        return { ...item, value: dashboardData.dashboardCount.totalKarir };
      default:
        return item;
    }
  });

  return (
    <div className="p-6 space-y-6 w-full ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Hai <br />
          <p className="font-medium text-sm">{dashboardData?.user}</p>
        </h1>
        <div className="flex text-2xl items-center px-8 gap-2 ">
          <MdNotifications className="text-[#5318A8]" size={40} />
          |
          <Avatar src="logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">{dashboardData?.user}</p>
        </div>
      </div>

      <div className="bg-[#5318A8] items-center justify-center p-6 rounded-lg text-white text-3xl w-xl ">
        <h2 className="text-lg font-semibold mb-2">
          Selamat Datang di <br /> Sistem Layanan Mahasiswa
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <Card
            key={item.key}
            className="shadow-md hover:shadow-lg transition-all"
          >
            <CardBody className="flex flex-col items-center justify-center gap-2 py-8">
              <div>{item.icon}</div>
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-2xl font-bold text-[#5318A8]">{item.value}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="justify-between flex items-center mt-1">
        <h2 className="text-xl font-semibold mb-0">Karir</h2>
        <Link href="/member/karir" underline="none" color="foreground">
          {" "}
          Lainya
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-1">
          <CardHeader className="flex flex-col gap-2 items-start mb-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwcGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Karir Image"
              className="rounded-lg"
              width={400}
              height={100}
              isZoomed
            />
            <p className="bg-purple-400 px-4 rounded-full text-small text-gray-950">
              Karir
            </p>
          </CardHeader>
          <CardBody className="mb-0">
            <h2 className="font-medium">
              Mobile develover needed for exciting new app
            </h2>
          </CardBody>
          <CardFooter className="flex gap-3">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwcGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Karir Image"
              className="rounded-lg"
              width={40}
              height={40}
            />
            <p className="font-medium">PT.Monokotil</p>
          </CardFooter>
        </Card>
      </div>

      <div className="justify-between flex items-center mt-1 ">
        <h2 className="text-xl font-semibold mb-0">Beasiswa</h2>
        <Link href="/member/beasiswa" underline="none" color="foreground">
          {" "}
          Lainya
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-2">
        <Card className="p-1">
          <CardHeader className="flex flex-col items-start gap-2 mb-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwcGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Karir Image"
              className="rounded-lg"
              width={400}
              height={100}
              isZoomed
            />
            <p className="bg-purple-400 px-4 rounded-full text-small text-gray-950">
              Karir
            </p>
          </CardHeader>
          <CardBody className="mb-0">
            <h2 className="font-medium">
              Mobile develover needed for exciting new app
            </h2>
          </CardBody>
          <CardFooter className=" flex gap-3 ">
            <Avatar
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWVyJTIwcGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Karir Image"
              size="md"
              radius="full"
            />
            <p className="font-medium">PT.Monokotil</p>
          </CardFooter>
        </Card>
      </div>
      <TableRiwayat />
    </div>
  );
};
export default Dashboard;
