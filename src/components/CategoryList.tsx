
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { List } from "lucide-react";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Vật liệu xây dựng",
      description: "Gạch, xi măng, cát, đá...",
      total: 0,
      paid: 0,
    },
    {
      id: 2,
      name: "Nhân công",
      description: "Chi phí nhân công xây dựng",
      total: 0,
      paid: 0,
    },
    {
      id: 3,
      name: "Thiết bị",
      description: "Thiết bị điện, nước, điều hòa...",
      total: 0,
      paid: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <List className="h-5 w-5" />
              {category.name}
            </CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Tổng chi phí:</span>
                <span className="font-medium">{category.total.toLocaleString()} đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Đã thanh toán:</span>
                <span className="font-medium">{category.paid.toLocaleString()} đ</span>
              </div>
              <Button className="w-full mt-4">Xem chi tiết</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryList;
