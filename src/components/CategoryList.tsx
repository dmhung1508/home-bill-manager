
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
import CategoryDetails from "./CategoryDetails";
import { useState } from "react";

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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

  const handleDetailsClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Danh mục chi phí</h2>
        <CategoryForm />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.id} 
            className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
          >
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
                  <span className="font-medium text-red-600">
                    {(category.total - category.paid).toLocaleString()} đ
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ 
                      width: `${(category.paid / category.total) * 100}%` 
                    }}
                  />
                </div>
                <ExpenseForm />
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleDetailsClick(category.id)}
                >
                  Xem chi tiết
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCategory && (
        <CategoryDetails
          open={selectedCategory !== null}
          onOpenChange={(open) => !open && setSelectedCategory(null)}
          category={categories.find(c => c.id === selectedCategory)!}
        />
      )}
    </div>
  );
};

export default CategoryList;
