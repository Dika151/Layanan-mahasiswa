import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { MdNotifications } from "react-icons/md";
import { useRouter } from "next/router";

const Karir = () => {
    const router = useRouter();
  return (
    <div className="p-6 w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Hai <br />
          <p className="font-medium text-sm">dika</p>
        </h1>
        <div className="flex text-2xl items-center px-8 gap-2 ">
          <MdNotifications className="text-[#5318A8]" size={40} />
          |
          <Avatar src="/logo/logoUnmuh.png" size="md" radius="full" />
          <p className="font-medium text-small">dika</p>
        </div>
      </div>

      <div className="bg-[#5318A8] items-center justify-center p-6 rounded-lg text-white w-lg mt-4 ">
        <h2 className="text-3xl  font-semibold mb-2">Karir <br /> 
        Mahasiswa</h2>
        <p className="text-small font-light">
         Temukan peluang kerja yang sesuai dengan minat dan keahlianmu.
        </p>
      </div>

      <h2 className="mt-6 font-semibold ">karir</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
        <Card 
        isPressable
        onPress={()=> router.push ("karir/detailkarir")}
        className="p-1">
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
              Beasiswa Unggulan PT 2024 untuk Mahasiswa Berprestasi
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
    </div>
  );
};
export default Karir;
