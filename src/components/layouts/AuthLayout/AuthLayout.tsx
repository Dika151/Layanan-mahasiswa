import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface propsTypes {
    title?: string;
    children : ReactNode;
}
const AuthLayout =  (props : propsTypes) => { 
    const {title, children } = props;
    return (
        <div className="  flex min-h-screen justify-center items-center min-w-full gap-10 py-10 lg:py">
        <PageHead title={title}/>
        <section className="max-w-screen-3xl 3xl:container p-6">{children}</section>
        </div>
    )
}

export default AuthLayout;