import { User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
interface Iregister {
  nama: string;
  nim: string;
  programStudi: string;
  phoneNumber: string;
  email: string;
  password: string;
};
interface Ilogin {
  username: string;
  password: string;
};

interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}
interface SessionExtended extends Session {
  accessToken?: string;
}
interface JwtExtended extends JWT {
  user?: UserExtended;
}
export type { Iregister, UserExtended, SessionExtended, JwtExtended, Ilogin };
