import { z } from "zod";

import { prisma } from "@/lib/db";
import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const messagesRouter = createTRPCRouter({
    getMany: baseProcedure
    .query(async () => {
        const messages = await prisma.message.findMany({
        orderBy: {
            updatedAt: "desc"
        },
        include: {
            fragment: true,
        }
    });

    return messages;
    }),
  create: baseProcedure
  .input(
    z.object({
      value: z.string()
      .min(1, { message: "Value is required" })
      .max(10000, { message: "Value is too long" }),
    projectId: z.string().min(1, { message: "Project ID is required" }),
    }),
  )
  .mutation(async ({ input }) => {
    const createdMessage = await prisma.message.create({
      data: {
        projectId: input.projectId,
        content: input.value,
        role: "USER",
        type: "RESULT",
      },
    });

    await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.value,
          projectId: input.projectId,
        }
      });
      return createdMessage;
    }),
});