import { Button, Image, Listbox, ListboxItem } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { VscSignOut } from "react-icons/vsc";
import { cn } from "@/utils/cn";

interface sidebarItems {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}
interface propsTypes {
  sidebarItems: sidebarItems[];
  isOpen: boolean;
}

const DashboardLaysidebar = (props: propsTypes) => {
  const { sidebarItems, isOpen } = props;
  const router = useRouter();
  return (
    <div className="relative z-50 flex h-screen w-full max-w-[300px] flex-col justify-between border-r-1 border-default-200 bg-[#5318A8] px-4 py-6 transition-all">
      <div>
        <div className="flex justify-center w-full text-white font-semibold gap-4">
          <Image
            src="logo/logoUnmuh.png"
            alt="logo"
            width={60}
            height={60}
            className="mb-6 w-32 "
            onClick={() => router.push("/")}
          />
          <h1 className="items-center justify-center">
            Layanan <br />
            Mahasiswa
          </h1>
        </div>
        <Listbox
          items={sidebarItems}
          variant="solid"
          aria-label="dashboard Menu"
          className="w-full"
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              className={cn("my-1 h-12 text-2xl text-white", {
                "bg-white text-[#5318A8]": item.href === router.pathname,
              })}
              startContent={item.icon}
              textValue={item.label}
              aria-labelledby={item.label}
              aria-describedby={item.label}
            >
              <p className="text-small">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex items-center p-1">
        <Button
          fullWidth
          variant="light"
          className="flex justify-start rounded-lg px-2 py-1.5 text-white"
          size="lg"
          onClick={() => signOut()}
        >
          <VscSignOut />
          Keluar
        </Button>
      </div>
    </div>
  );
};
export default DashboardLaysidebar;
