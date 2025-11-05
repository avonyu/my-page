import { cn } from "@/lib/utils";

function TodoPage() {
  return (
    <main
      className={cn(
        "bg-linear-to-br from-gray-50 to-gray-100",
        "dark:from-gray-900 dark:to-gray-800"
      )}
    >
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <div className="text-4xl">Todo Page</div>
      </div>
    </main>
  );
}

export default TodoPage;
