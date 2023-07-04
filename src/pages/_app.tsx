import CustomLayout from "@/components/customLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  //const client = new QueryClient();
  return (
    <RecoilRoot>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </RecoilRoot>
  );
}




