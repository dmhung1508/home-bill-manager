
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react"; // Fixed import
import { useState } from "react";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement with Supabase later
    console.log("New expense:", { 
      name, 
      amount: Number(amount), 
      description, 
      paidAmount: Number(paidAmount),
      isPaid 
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4 gap-2">
          <Plus className="h-4 w-4" />
          Thêm chi phí mới
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thêm chi phí mới</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Tên khoản chi
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên khoản chi"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="amount" className="text-sm font-medium">
              Tổng chi phí
            </label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Nhập tổng chi phí"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="paidAmount" className="text-sm font-medium">
              Đã thanh toán
            </label>
            <Input
              id="paidAmount"
              type="number"
              value={paidAmount}
              onChange={(e) => setPaidAmount(e.target.value)}
              placeholder="Nhập số tiền đã thanh toán"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium">
              Ghi chú
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập ghi chú chi tiết"
              className="mt-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isPaid"
              checked={isPaid}
              onChange={(e) => setIsPaid(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="isPaid" className="text-sm font-medium">
              Đã thanh toán đủ
            </label>
          </div>
          <Button type="submit" className="w-full">
            Thêm chi phí
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseForm;
