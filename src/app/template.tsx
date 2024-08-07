import NavBar from "@/components/Navbar/NavBar";
import { AppDataProvider } from "@/context/ApplicationContext";


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppDataProvider>
        <NavBar />
        <div>{children}</div>
      </AppDataProvider>
    </>
  );
}
