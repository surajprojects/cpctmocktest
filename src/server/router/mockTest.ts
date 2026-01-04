import z from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../trpc";

export const mockTestRouter = router({
    byId: publicProcedure
        .query(async (opts) => {
            const mockTestData = await opts.ctx.prisma.mockTest.findUnique({
                where: {
                    id: "",
                    createdById: "",
                    isDeleted: false,
                },
            });
            if (!mockTestData) {
                throw new TRPCError({ code: "NOT_FOUND" });
            }
            return { message: "Mock test found successfully!!!", mockTestData };
        }),
    list: publicProcedure
        .query(async (opts) => {
            const mockTestsData = await opts.ctx.prisma.mockTest.findMany({
                where: {
                    id: "",
                    createdById: "",
                    isDeleted: false,
                },
            });
            if (!(mockTestsData.length > 0)) {
                throw new TRPCError({ code: "NOT_FOUND" });
            }
            return { message: "Mock tests found successfully!!!", mockTestsData };
        }),
    create: publicProcedure
        .input(
            z.object({
                title: z.string(),
                description: z.string(),
                totalQuestions: z.number(),
                timeLimitInMinutes: z.number(),
                examDate: z.string(),
            })
        )
        .mutation(async (opts) => {
            const mockTestData = await opts.ctx.prisma.mockTest.create({
                data: {
                    title: opts.input.title,
                    description: opts.input.description,
                    totalQuestions: opts.input.totalQuestions,
                    timeLimitInMinutes: opts.input.timeLimitInMinutes,
                    examDate: new Date(opts.input.examDate).toISOString(),
                    createdById: "",
                },
            });
            return { message: "Mock test created successfully!!!", mockTestData };
        }),
    update: publicProcedure
        .input(
            z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                totalQuestions: z.number().optional(),
                timeLimitInMinutes: z.number().optional(),
                examDate: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            const mockTestData = await opts.ctx.prisma.mockTest.update({
                where: {
                    id: "",
                    createdById: "",
                    isDeleted: false,
                },
                data: {
                    ...(opts.input.title && { title: opts.input.title }),
                    ...(opts.input.description && { description: opts.input.description }),
                    ...(opts.input.totalQuestions && { totalQuestions: opts.input.totalQuestions }),
                    ...(opts.input.timeLimitInMinutes && { timeLimitInMinutes: opts.input.timeLimitInMinutes }),
                    ...(opts.input.examDate && { examDate: opts.input.examDate }),
                },
            });
            return { message: "Mock test updated successfully!!!", mockTestData };
        }),
    delete: publicProcedure
        .mutation(async (opts) => {
            const mockTestData = await opts.ctx.prisma.mockTest.update({
                where: {
                    id: "",
                    createdById: "",
                    isDeleted: false,
                },
                data: {
                    isDeleted: true,
                },
            });
            return { message: "Mock test deleted successfully!!!", mockTestData };
        }),
});