import { cn } from "@/utils/cn";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"], // atau ["latin", "devanagari"] sesuai kebutuhan
  weight: ["100", "200", "300", "400", "500", "600", "700"], // pilih bobot yang diinginkan
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({
  Component,
  pageProps: session,
  ...pageProps
}: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <main className={cn(poppins.className)}>
            <Component {...pageProps} />
          </main>
        </NextUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
