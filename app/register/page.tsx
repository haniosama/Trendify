import Register from "@/components/register";
import { getSession } from "@/lib/session";
import Image from "next/image";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 h-screen ">
      <div className="flex-1 mt-10   p-6 md:p-8">
        <h2 className=" text-2xl font-semibold text-center mb-3 ">
          Welcome Back 👋
        </h2>
        <p
          className="
      text-center text-sm text-gray-500 dark:text-gray-400
      
      "
        ></p>
        <Register />
      </div>
      <div className="flex-1 ">
        <Image src="/sign.jpg" alt="Login" width={500} height={500} />
      </div>
    </div>
  );
};
export default RegisterPage;
