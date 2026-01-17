import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SidePannel from "./components/side-pannel";
import MainArea from "./components/main-area";

// 主组件
const TaskManagerApp = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) redirect("/login");
  return (
    <div className="h-screen overflow-hidden bg-white font-sans min-w-200 flex">
      <SidePannel />
      <MainArea />
    </div>
  );
};

export default TaskManagerApp;
