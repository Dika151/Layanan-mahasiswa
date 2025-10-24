import {
  FaThList,
  FaUniversity,
  FaUserGraduate,
  FaUserShield,
} from "react-icons/fa";

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <FaThList />,
  },
  {
    key: "datapengaduan",
    label: "Data Pengaduan",
    href: "/admin/pengaduan",
    icon: <FaUserShield />,
  },
  {
    key: "databeasiswa",
    label: "Data Beasiswa",
    href: "/admin/beasiswa",
    icon: <FaUserGraduate />,
  },
  {
    key: "Datakarir",
    label: "Data Karir",
    href: "/adin/karir",
    icon: <FaUniversity />,
  },
];
const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <FaThList />,
  },
  {
    key: "pengaduan",
    label: "Pengaduan",
    href: "/member/pengaduan",
    icon: <FaUserShield />,
  },
  {
    key: "beasiswa",
    label: "Beasiswa",
    href: "/member/beasiswa",
    icon: <FaUserGraduate />,
  },
  {
    key: "karir",
    label: "Karir",
    href: "/member/karir",
    icon: <FaUniversity />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
