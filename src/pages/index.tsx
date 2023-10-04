import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { signDevToken } from "@/utils/signDevToken";
import { GetServerSideProps } from "next";
import { data } from "@/data";
import { SearchExample } from "@/components/SearchExample";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  jwtToken: string;
}

export default function Home({ jwtToken }: HomeProps) {
  return (
    <>
      <Head>
        <title>FYM recruitment</title>
        <link rel="shortcut icon" href={"/favicon.png"} />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="m-3 w-100">
          <h4>Search example</h4>
          <SearchExample jwtToken={jwtToken} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const jwtToken = signDevToken(
    data.clientId,
    data.keyId,
    data.privateKey,
    data.integrationUserUUID,
  );
  return { props: { jwtToken } };
}) satisfies GetServerSideProps<HomeProps>;
