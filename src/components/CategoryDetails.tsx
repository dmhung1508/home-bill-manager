
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChartBar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

interface CategoryDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: {
    id: number;
    name: string;
    description: string;
    total: number;
    paid: number;
  } | undefined;
}

const CategoryDetails = ({ open, onOpenChange, category }: CategoryDetailsProps) => {
  // Return early if category is undefined
  if (!category) {
    return null;
  }
  
  const chartData = [
    {
      name: "Đã thanh toán",
      amount: category.paid,
    },
    {
      name: "Chưa thanh toán",
      amount: category.total - category.paid,
    },
  ];

  const paymentPercentage = Math.round((category.paid / category.total) * 100) || 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[600px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold flex items-center gap-2">
            <ChartBar className="h-6 w-6" />
            {category.name}
          </SheetTitle>
          <SheetDescription className="text-base">
            {category.description}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8">
          {/* Thống kê tổng quan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl shadow-sm transition-all hover:shadow-md">
              <p className="text-sm text-gray-600 dark:text-gray-400">Tổng chi phí</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {category.total.toLocaleString()}đ
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl shadow-sm transition-all hover:shadow-md">
              <p className="text-sm text-gray-600 dark:text-gray-400">Đã thanh toán</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {category.paid.toLocaleString()}đ
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-4 rounded-xl shadow-sm transition-all hover:shadow-md">
              <p className="text-sm text-gray-600 dark:text-gray-400">Chưa thanh toán</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {(category.total - category.paid).toLocaleString()}đ
              </p>
            </div>
          </div>

          {/* Biểu đồ */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Phân tích thanh toán</h3>
            <div className="h-[300px] w-full">
              <ChartContainer
                className="h-[300px]"
                config={{
                  paid: {
                    label: "Đã thanh toán",
                    theme: {
                      light: "#22c55e",
                      dark: "#4ade80",
                    },
                  },
                  unpaid: {
                    label: "Chưa thanh toán",
                    theme: {
                      light: "#ef4444",
                      dark: "#f87171",
                    },
                  },
                }}
              >
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="amount" fill="var(--color-paid)" />
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          {/* Tiến độ thanh toán */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Tiến độ thanh toán</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    Tiến độ
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-green-600">
                    {paymentPercentage}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
                <div
                  style={{ width: `${paymentPercentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CategoryDetails;
