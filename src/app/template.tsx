import NavBar from "@/components/Navbar/NavBar";


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
