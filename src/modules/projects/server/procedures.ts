import { z } from "zod";
import { generateSlug } from "random-word-slugs";

import { prisma } from "@/lib/db";
import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const projectsRouter = createTRPCRouter({
    getMany: baseProcedure
    .query(async () => {
        const projects = await prisma.message.findMany({
        orderBy: {
            updatedAt: "desc"
        },
        include: {
            fragment: true,
        }
    });

    return projects;
    }),
  create: baseProcedure
  .input(
    z.object({
    value: z.string()
      .min(1, { message: "Prompt is required" })
      .max(10000, { message: "Prompt is too long" }),
    }),
  )
  .mutation(async ({ input }) => {
    const createdProject = await prisma.project.create({
      data: {
        name: generateSlug(2, { 
          format: "kebab" 
        }),
        messages: {
          create: {
            content: input.value,
            role: "USER",
            type: "RESULT",
          }
        }
      },
    });

    await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.value,
          projectId: createdProject.id,
        }
      });
      return createdProject;
    }),
});