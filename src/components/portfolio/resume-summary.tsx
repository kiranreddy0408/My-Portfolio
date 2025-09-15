'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Bot, Loader2 } from 'lucide-react';
import { generateResumeSummary } from '@/ai/flows/dynamic-resume-summary';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Section } from './section';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  jobDescription: z.string().min(50, {
    message: "Please paste a job description of at least 50 characters.",
  }),
});

export function ResumeSummaryGenerator() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateResumeSummary({
        jobDescription: values.jobDescription,
        resume: portfolioData.resume,
      });
      setSummary(result.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem generating the summary. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section id="ai-summary" title="AI-Powered Resume Summary" Icon={Bot}>
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Tailor My Summary</CardTitle>
          <CardDescription>
            Paste a job description below, and I'll use AI to generate a custom summary of my resume that highlights the most relevant skills and experiences.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Job Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the job description here..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : 'Generate Summary'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      
      {(isLoading || summary) && (
        <Card className="mt-6 bg-card/50 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="size-5 text-primary"/>
              Generated Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && !summary && (
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
              </div>
            )}
            {summary && <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>}
          </CardContent>
        </Card>
      )}
    </Section>
  );
}
