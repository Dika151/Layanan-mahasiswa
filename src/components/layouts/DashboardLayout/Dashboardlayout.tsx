import PageHead from "@/components/commons/PageHead";
import { ReactNode, useState } from "react";
import DashboardLaysidebar from "./DashboarLaySidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constant";

interface propsTypes {
  children: ReactNode;
  title?: string;
  type?: string;
}
const DashboardLayout = (props: propsTypes) => {
  const { children, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl: container flex">
        <DashboardLaysidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">{children}</div>
      </div>
    </>
  );
};
export default DashboardLayout;
