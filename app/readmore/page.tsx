import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReadMore() {
  return (
    <main
      className={cn(
        "bg-linear-to-br from-gray-50 to-gray-100",
        "dark:from-gray-900 dark:to-gray-800"
      )}
    >
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8">
        <div className="max-w-4xl w-full space-y-8">
          {/* 页面标题 */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              了解更多
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              探索TodoList应用的强大功能
            </p>
          </div>

          {/* 功能特性网格 */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            
            {/* 功能卡片 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                任务管理
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                轻松创建、编辑和删除任务。支持任务分类和优先级设置，帮助您更好地组织日常工作。
              </p>
            </div>

            {/* 功能卡片 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                截止日期
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                为每个任务设置截止日期，系统会自动提醒您即将到期的任务，确保不会错过任何重要事项。
              </p>
            </div>

            {/* 功能卡片 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                数据安全
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                您的数据安全是我们的首要任务。所有数据都经过加密处理，确保您的个人信息和任务数据安全无虞。
              </p>
            </div>

            {/* 功能卡片 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                深色模式
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                支持深色和浅色主题模式，根据您的偏好或环境光线自动切换，保护您的视力并提供舒适的视觉体验。
              </p>
            </div>
          </div>

          {/* 技术特点 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              技术特点
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  响应式设计
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  适配各种设备屏幕
                </div>
              </div>
              <div className="p-4">
                <div className="text-green-600 dark:text-green-400 font-semibold">
                  实时同步
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  数据实时更新保存
                </div>
              </div>
              <div className="p-4">
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  高性能
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  快速加载和响应
                </div>
              </div>
            </div>
          </div>

          {/* 行动号召 */}
          <div className="text-center mt-12">
            <Link
              href="/todo"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              开始使用 TodoList
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
