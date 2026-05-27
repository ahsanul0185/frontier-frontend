import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
