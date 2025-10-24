import Head from "next/head";

interface Propstypes {
  title?: string;
}
const PageHead = (props: Propstypes) => {
  const { title = "Layanan Mahasiswa" } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};
export default PageHead;
