
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <CategoryList />
        </div>
      </main>
    </div>
  );
};

export default Index;
