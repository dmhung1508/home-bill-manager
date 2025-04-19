
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { List } from "lucide-react";
import CategoryForm from "./CategoryForm";
import ExpenseForm from "./ExpenseForm";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Vật liệu xây dựng",
      description: "Gạch, xi măng, cát, đá...",
      total: 15000000,
      paid: 10000000,
    },
    {
      id: 2,
      name: "Nhân công",
      description: "Chi phí nhân công xây dựng",
      total: 20000000,
      paid: 15000000,
    },
    {
      id: 3,
      name: "Thiết bị",
      description: "Thiết bị điện, nước, điều hòa...",
      total: 25000000,
      paid: 20000000,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Danh mục chi phí</h2>
        <CategoryForm />
      </div>
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
                  <span className="font-medium text-green-600">{category.paid.toLocaleString()} đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Chưa thanh toán:</span>
                  <span className="font-medium text-red-600">{(category.total - category.paid).toLocaleString()} đ</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ 
                      width: `${(category.paid / category.total) * 100}%` 
                    }}
                  />
                </div>
                <ExpenseForm />
                <Button variant="outline" className="w-full">Xem chi tiết</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
