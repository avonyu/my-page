"use client";

import { useState } from "react";
import { Home, Star, Plus } from "lucide-react";

interface Tasks {
  id: number;
  title: string;
  subtitle: string;
  starred: boolean;
}

const simpleTasks: Tasks[] = [
  {
    id: 1,
    title:
      "写了一个爬虫去爬各种技术社区、爬领英，只要找到相关岗位，就会自动发邮件给我，我就立马去查看",
    subtitle: "",
    starred: false,
  },
  {
    id: 2,
    title: "前端/技术/自媒体矩阵",
    subtitle: "第 0 步，共 10 步",
    starred: false,
  },
  {
    id: 3,
    title: "面试问题",
    subtitle: "第 0 步，共 5 步",
    starred: false,
  },
  {
    id: 4,
    title: "自动化工具研究",
    subtitle: "",
    starred: false,
  },
  {
    id: 5,
    title: "高级前端:了解wasm",
    subtitle: "",
    starred: false,
  },
  {
    id: 6,
    title: "Prisma操作数据库",
    subtitle: "",
    starred: false,
  },
  {
    id: 7,
    title: "telegram图片整理",
    subtitle: "",
    starred: false,
  },
  {
    id: 8,
    title: "清理Chrome阅读清单",
    subtitle: "",
    starred: false,
  },
  {
    id: 9,
    title: "figma mcp",
    subtitle: "",
    starred: false,
  },
  {
    id: 10,
    title: "阮一峰Typescript教程",
    subtitle: "",
    starred: false,
  },
  {
    id: 11,
    title: "了解Dify的基础使用",
    subtitle: "",
    starred: false,
  },
  {
    id: 12,
    title: "了解敏捷开发（Agile software development）",
    subtitle: "第 0 步，共 1 步",
    starred: false,
  },
];

function MainArea() {
  // 任务数据
  const [tasks, setTasks] = useState<Tasks[]>(simpleTasks);

  // 星标切换功能
  const toggleStar = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, starred: !task.starred } : task
      )
    );
  };

  return (
    <main className="flex-1 flex flex-col rounded-tl-md bg-linear-to-br from-[#1a936f] to-[#f3d2c1] overflow-hidden">
      {/* 顶部导航栏 */}
      <header className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-md">
        <Home size={24} className="text-white" />
        <h1 className="text-white text-xl font-semibold ml-2">任务</h1>
      </header>

      {/* 任务列表容器 */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* 任务卡片列表 */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-50 rounded p-4 mb-1 shadow-sm flex items-center gap-3 hover:bg-white transition-transform"
          >
            <input type="checkbox" className="w-4.5 h-4.5" />
            <div className="flex-1">
              <div className="text-sm font-medium">{task.title}</div>
              {task.subtitle && (
                <div className="text-xs text-gray-600">{task.subtitle}</div>
              )}
            </div>
            <button
              onClick={() => toggleStar(task.id)}
              className="bg-transparent border-none cursor-pointer text-gray-400 hover:text-gray-500"
            >
              <Star
                size={16}
                fill={task.starred ? "#6a7282" : "none"}
                className={task.starred ? "text-gray-500" : ""}
              />
            </button>
          </div>
        ))}

        {/* 添加任务按钮 */}
        <button className="w-full flex items-center gap-2 px-3 py-3 border border-dashed border-gray-300 bg-white/80 text-gray-600 rounded-lg text-sm hover:bg-white mt-4">
          <Plus size={16} />
          添加任务
        </button>
      </div>
    </main>
  );
}

export default MainArea;