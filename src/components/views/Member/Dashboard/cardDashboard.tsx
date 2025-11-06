import { FaBriefcase, FaGraduationCap, FaUsers } from "react-icons/fa";

export const defaultStats = [
  {
    key: "total-aduan",
    icon: <FaUsers className="text-3xl text-[#5318A8]" />,
    title: "Total Aduan",
    value: 0,
  },
  {
    key: "total-beasiswa",
    icon: <FaGraduationCap className="text-3xl text-[#5318A8]" />,
    title: "Total Beasiswa",
    value: 0,
  },
  {
    key: "total-karir",
    icon: <FaBriefcase className="text-3xl text-[#5318A8]" />,
    title: "Total Karir",
    value: 0,
  },
];
