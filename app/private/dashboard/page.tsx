import { DeleteButton } from "@/components/deleteItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface Product {
  _id: number;
  title: string;
  description: string;
  price: number;
}

const PrivateDashboardPage = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();

  console.log(data);
  return (
    <div className="flex min-h-screen py-20">
      <div className="flex-1 bg-gray100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-medium text-sm">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-medium text-sm">
                  Subscriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-medium text-sm">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-medium text-sm">
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Resent Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="whitespace-nowrap">
                          Title
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Description
                        </TableHead>
                        <TableHead className="whitespace-nowrap">
                          Price
                        </TableHead>
                        <TableHead className="whitespace-nowrap">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((product: Product) => (
                        <TableRow key={product._id}>
                          <TableCell className="whitespace-nowrap">
                            {product.title}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {product.description.slice(0, 50)}...
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            ${product.price}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Link
                                href={`/upadteproduct/${product._id}`}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
                              >
                                Edit
                              </Link>
                              <DeleteButton productId={product._id} />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivateDashboardPage;
