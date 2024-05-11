import { ReactNode } from "react";

type Props = {
  headerContent: any;
  children: ReactNode;
  FooterTitle: any;
};

const Layout = ({ headerContent, children, FooterTitle }: Props) => {
  return (
    <>
      <header>{headerContent}</header>
      {children}
      <footer className="bg-red-700">{FooterTitle}</footer>
    </>
  );
};

export default Layout;
