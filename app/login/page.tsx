import { getSession } from "@/lib/session";
import Image from "next/image";
import { redirect } from "next/navigation";
import Login from "@/components/login";
const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen">
      <div className="flex-1 mt-10  p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-3 text-center">Login Page</h2>

        <Login />
      </div>
      <div className="flex-1 ">
        <Image src="/sign.jpg" alt="Login" width={500} height={500} />
      </div>
    </div>
  );
};
export default LoginPage;
