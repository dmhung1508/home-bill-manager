
import { Button } from "@/components/ui/button";
import { FileText, List, Wallet } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-gray-900">Quản Lý Chi Phí Xây Nhà</h1>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Tổng chi phí
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
