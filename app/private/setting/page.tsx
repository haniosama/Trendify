import { deleteUser, getAllUser } from "@/action/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const SettingPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/login");
  const allUsers = await getAllUser();
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray100 dark:bg-gray-950">
        <div className="p-6 grid gap-6 shadow-md m-5">
          <h2 className="text-2xl font-semibold">Users</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await deleteUser(user.id);
                      }}
                    >
                      <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                        Delete
                      </button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default SettingPage;
