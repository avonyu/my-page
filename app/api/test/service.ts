"use server"

import prisma from "@/lib/prisma";

export interface TestInput {
  content: string;
  userId: string;
}

export interface TestResponse {
  id: number;
  content: string;
  createAt: Date;
  updateAt: Date;
  userId: string;
}

export async function createTest(input: TestInput): Promise<TestResponse> {
  try {
    const test = await prisma.test.create({
      data: {
        content: input.content,
        userId: input.userId
      },
    });

    return {
      id: test.id,
      content: test.content,
      createAt: test.createAt,
      updateAt: test.updateAt,
      userId: test.userId
    };
  } catch (error) {
    throw new Error(`Failed to create test: ${error}`);
  }
}

export async function getAllTests(): Promise<TestResponse[]> {
  try {
    const tests = await prisma.test.findMany({
      orderBy: {
        createAt: 'desc',
      },
    });

    return tests.map(test => ({
      id: test.id,
      content: test.content,
      createAt: test.createAt,
      updateAt: test.updateAt,
      userId: test.userId
    }));
  } catch (error) {
    throw new Error(`Failed to fetch tests: ${error}`);
  }
}

export async function getTestById(id: number): Promise<TestResponse | null> {
  try {
    const test = await prisma.test.findUnique({
      where: {
        id,
      },
    });

    if (!test) {
      return null;
    }

    return {
      id: test.id,
      content: test.content,
      createAt: test.createAt,
      updateAt: test.updateAt,
      userId: test.userId
    };
  } catch (error) {
    throw new Error(`Failed to fetch test: ${error}`);
  }
}

export async function updateTest(id: number, input: Partial<TestInput>): Promise<TestResponse | null> {
  try {
    const test = await prisma.test.update({
      where: {
        id,
      },
      data: {
        content: input.content,
      },
    });

    return {
      id: test.id,
      content: test.content,
      createAt: test.createAt,
      updateAt: test.updateAt,
      userId: test.userId
    };
  } catch (error) {
    throw new Error(`Failed to update test: ${error}`);
  }
}

export async function deleteTest(id: number): Promise<boolean> {
  try {
    await prisma.test.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (error) {
    throw new Error(`Failed to delete test: ${error}`);
  }
}