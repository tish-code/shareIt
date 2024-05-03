import Head from "next/head";
import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
export function Layout(props: IProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Admin | Sharely</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
