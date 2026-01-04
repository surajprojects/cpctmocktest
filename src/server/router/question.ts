import z from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../trpc";
import { CorrectOption } from "@/db/generated/prisma";

export const questionRouter = router({
    byId: publicProcedure
        .query(async (opts) => {
            const questionData = await opts.ctx.prisma.question.findUnique({
                where: {
                    id: "",
                    isDeleted: false,
                },
            });
            if (!questionData) {
                throw new TRPCError({ code: "NOT_FOUND" });
            }
            return { message: "Question found successfully!!!", questionData };
        }),
    list: publicProcedure
        .query(async (opts) => {
            const questionsData = await opts.ctx.prisma.mockTest.findMany({
                where: {
                    id: "",
                    isDeleted: false,
                },
            });
            if (!(questionsData.length > 0)) {
                throw new TRPCError({ code: "NOT_FOUND" });
            }
            return { message: "Questions found successfully!!!", questionsData };
        }),
    create: publicProcedure
        .input(
            z.object({
                // Question
                questionEn: z.string(),
                questionHi: z.string(),
                // Option A
                optionAEn: z.string(),
                optionAHi: z.string(),
                // Option B
                optionBEn: z.string(),
                optionBHi: z.string(),
                // Option C
                optionCEn: z.string(),
                optionCHi: z.string(),
                // Option D
                optionDEn: z.string(),
                optionDHi: z.string(),
                // Correct Option
                correctOption: z.enum([...Object.values(CorrectOption)] as [CorrectOption, ...CorrectOption[]]),
                // Explanation
                explanationEn: z.string().optional(),
                explanationHi: z.string().optional(),
                // Marks
                marks: z.number().optional(),
            })
        )
        .mutation(async (opts) => {
            const questionData = await opts.ctx.prisma.question.create({
                data: {
                    mockTestId: "",
                    // Question
                    questionEn: opts.input.questionEn,
                    questionHi: opts.input.questionHi,
                    // Option A
                    optionAEn: opts.input.optionAEn,
                    optionAHi: opts.input.optionAHi,
                    // Option B
                    optionBEn: opts.input.optionBEn,
                    optionBHi: opts.input.optionBHi,
                    // Option C
                    optionCEn: opts.input.optionCEn,
                    optionCHi: opts.input.optionCHi,
                    // Option D
                    optionDEn: opts.input.optionDEn,
                    optionDHi: opts.input.optionDHi,
                    // Correct Option
                    correctOption: opts.input.correctOption,
                    // Explanation                    
                    ...(opts.input.explanationEn && { explanationEn: opts.input.explanationEn }),
                    ...(opts.input.explanationHi && { explanationHi: opts.input.explanationHi }),
                    // Marks
                    ...(opts.input.marks && { marks: opts.input.marks }),
                },
            });
            return { message: "Question created successfully!!!", questionData };
        }),
    update: publicProcedure
        .input(
            z.object({
                // Question
                questionEn: z.string().optional(),
                questionHi: z.string().optional(),
                // Option A
                optionAEn: z.string().optional(),
                optionAHi: z.string().optional(),
                // Option B
                optionBEn: z.string().optional(),
                optionBHi: z.string().optional(),
                // Option C
                optionCEn: z.string().optional(),
                optionCHi: z.string().optional(),
                // Option D
                optionDEn: z.string().optional(),
                optionDHi: z.string().optional(),
                // Correct Option
                correctOption: z.enum([...Object.values(CorrectOption)] as [CorrectOption, ...CorrectOption[]]).optional(),
                // Explanation
                explanationEn: z.string().optional(),
                explanationHi: z.string().optional(),
                // Marks
                marks: z.number().optional(),
            })
        )
        .mutation(async (opts) => {
            const questionData = await opts.ctx.prisma.question.update({
                where: {
                    id: "",
                    mockTestId: "",
                    isDeleted: false,
                },
                data: {
                    // Question
                    ...(opts.input.questionEn && { questionEn: opts.input.questionEn }),
                    ...(opts.input.questionHi && { questionHi: opts.input.questionHi }),
                    // Option A                    
                    ...(opts.input.optionAEn && { optionAEn: opts.input.optionAEn }),
                    ...(opts.input.optionAHi && { optionAHi: opts.input.optionAHi }),
                    // Option B                    
                    ...(opts.input.optionBEn && { optionBEn: opts.input.optionBEn }),
                    ...(opts.input.optionBHi && { optionBHi: opts.input.optionBHi }),
                    // Option C                    
                    ...(opts.input.optionCEn && { optionCEn: opts.input.optionCEn }),
                    ...(opts.input.optionCHi && { optionCHi: opts.input.optionCHi }),
                    // Option D                    
                    ...(opts.input.optionDEn && { optionDEn: opts.input.optionDEn }),
                    ...(opts.input.optionDHi && { optionDHi: opts.input.optionDHi }),
                    // Correct Option                    
                    ...(opts.input.correctOption && { correctOption: opts.input.correctOption }),
                    // Explanation                    
                    ...(opts.input.explanationEn && { explanationEn: opts.input.explanationEn }),
                    ...(opts.input.explanationHi && { explanationHi: opts.input.explanationHi }),
                    // Marks
                    ...(opts.input.marks && { marks: opts.input.marks }),
                },
            });
            return { message: "Question updated successfully!!!", questionData };
        }),
    delete: publicProcedure
        .mutation(async (opts) => {
            const questionData = await opts.ctx.prisma.question.update({
                where: {
                    id: "",
                    mockTestId: "",
                    isDeleted: false,
                },
                data: {
                    isDeleted: true,
                },
            });
            return { message: "Question deleted successfully!!!", questionData };
        }),
});