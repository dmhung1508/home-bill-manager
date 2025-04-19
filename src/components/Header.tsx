
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Header = () => {
  const totalExpenses = 0; // Will be calculated from Supabase data later
  const totalPaid = 0; // Will be calculated from Supabase data later

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-gray-900">Quản Lý Chi Phí Xây Nhà</h1>
          <div className="flex space-x-4">
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-500">Tổng chi phí</p>
                <p className="font-semibold">{totalExpenses.toLocaleString()} đ</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Đã thanh toán</p>
                <p className="font-semibold">{totalPaid.toLocaleString()} đ</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                Chi tiết
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
