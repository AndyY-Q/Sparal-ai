"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon, Loader2Icon, SparklesIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { useRouter } from "next/navigation";

import { PROJECT_TEMPLATES } from "@/modules/home/constants";

const formSchema = z.object({
    value: z.string()
      .min(1, { message: "Value is required" })
      .max(10000, { message: "Value is too long" }),
});

export const ProjectForm = () => {
    const router = useRouter();
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
        },
    });

    const createProject = useMutation(trpc.projects.create.mutationOptions({
        onSuccess: (data) => {
            form.reset();
            queryClient.invalidateQueries(
                trpc.projects.getMany.queryOptions(),
            );
            queryClient.invalidateQueries(
                trpc.usage.status.queryOptions()
            );
            router.push(`/projects/${data.id}`);
        },
        onError: (error) => {
            toast.error(error.message);

            if (error.data?.code === "UNAUTHORIZED") {
                router.push("/sign-in");
            }

            if (error.data?.code === "TOO_MANY_REQUESTS") {
                router.push("/pricing");
            }  
        },
    }))

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await createProject.mutateAsync({
            value: values.value,
        });
    };

    const onSelect = (value: string) => {
        form.setValue("value", value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const [isFocused, setIsFocused] = useState(false);
    const isPending = createProject.isPending;
    const isButtonDisabled = isPending || !form.formState.isValid;

    return (
        <Form {...form}>
        <section className="space-y-4">
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(
                "relative overflow-hidden rounded-xl border bg-background/95 p-4 pt-1 shadow-xl shadow-slate-900/5 transition-all",
                "dark:bg-sidebar/90",
                isFocused && "border-primary/50 shadow-2xl shadow-primary/10",
            )}
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <TextareaAutosize
                            {...field}
                            disabled={isPending}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            minRows={2}
                            maxRows={8}
                            className="pt-4 resize-none border-none w-full outline-none bg-transparent text-base leading-7 placeholder:text-muted-foreground/70"
                            placeholder="Describe the app, maintainer workflow, or sandboxed agent experiment you want LaunchKit AI to build..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                                    e.preventDefault();
                                    form.handleSubmit(onSubmit)(e);
                                }
                            }}
                        />
                    )}
                />
                <div className="flex gap-x-2 items-end justify-between pt-2">
                    <div className="hidden items-center gap-2 text-[11px] text-muted-foreground sm:flex">
                        <SparklesIcon className="size-3.5 text-primary" />
                        <span>Runs through Inngest, OpenAI, and an E2B sandbox</span>
                        <kbd className="ml-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                            <span>&#8984;</span>Enter
                        </kbd>
                    </div>
                    <Button
                        disabled={isButtonDisabled}
                        className= {cn(
                            "size-9 rounded-full shadow-sm",
                            isButtonDisabled && "border bg-muted-foreground"
                        )}
                    >
                        {isPending ? (
                            <Loader2Icon className="size-4 animate-spin" />
                        ): (
                            <ArrowUpIcon />
                        )}
                    </Button>
                </div>
            </form>
            <div className="hidden max-w-3xl flex-wrap gap-2 md:flex">
                {PROJECT_TEMPLATES.map((template) => (
                    <Button
                        key={template.title}
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-background/70 text-xs text-muted-foreground shadow-none backdrop-blur hover:border-primary/30 hover:text-foreground"
                        onClick={() => onSelect(template.prompt)}
                    >
                        {template.title}
                    </Button>
                ))}
            </div>
            </section>
        </Form>
    );
};
