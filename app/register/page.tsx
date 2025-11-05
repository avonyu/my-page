"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import OAuths from "@/components/sign-in";
import { registerSchema, RegisterData } from "@/lib/zod";

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: RegisterData) {
    console.log(values);
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/api/v1/register`,
        {
          username: values.username,
          password: values.password, // 使用明文密码，后端会处理加密
        }
      );

      const data = response.data;

      // 注册成功后跳转到登录页
      router.push("/login");
    } catch (error: any) {
      console.error("注册失败:", error);
      // TODO: 显示错误信息给用户
    }
  }

  return (
    <main
      className={cn(
        "bg-linear-to-br from-gray-50 to-gray-100",
        "dark:from-gray-900 dark:to-gray-800"
      )}
    >
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-8 p-8 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">注册</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>用户名</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入用户名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入邮箱" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="请输入密码"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>确认密码</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="请再次输入密码"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                注册
              </Button>
              <div className="text-center text-sm mb-3">
                已有账号？
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  立即登录
                </Link>
              </div>
            </form>
            <Separator className="my-3" />
            <OAuths />
          </Form>
        </div>
      </div>
    </main>
  );
}
