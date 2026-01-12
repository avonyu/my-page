"use client";

import { useEffect, Dispatch, SetStateAction } from "react";
import { TestResponse } from "@/app/api/test/service";
import { getAllTests } from "@/app/api/test/service";

export function ShowAllTests({
  tests,
  setTests,
  className,
}: {
  tests: TestResponse[];
  setTests: Dispatch<SetStateAction<TestResponse[]>>;
  className?: string;
}) {
  useEffect(() => {
    // 获取测试数据的逻辑
    const fetchTests = async () => {
      try {
        // const response = await fetch("/api/test");
        // const data = await response.json();
        const data = await getAllTests();
        setTests(data || []);
      } catch (error) {
        console.error("获取测试数据失败:", error);
      }
    };

    fetchTests();
  }, []);

  return (
    <div className={className}>
      <h1 className="text-2xl font-bold mb-2">数据项</h1>
      {tests.map((item) => (
        <div key={item.id}>- {item.content}</div>
      ))}
    </div>
  );
}
