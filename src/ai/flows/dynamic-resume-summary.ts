'use server';

/**
 * @fileOverview Generates a dynamic resume summary tailored to a job description.
 *
 * - generateResumeSummary - A function that generates the resume summary.
 * - GenerateResumeSummaryInput - The input type for the generateResumeSummary function.
 * - GenerateResumeSummaryOutput - The return type for the generateResumeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeSummaryInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume summary to.'),
  resume: z
    .string()
    .describe('The resume content to be summarized, should contain experience, skills, etc.'),
});
export type GenerateResumeSummaryInput = z.infer<
  typeof GenerateResumeSummaryInputSchema
>;

const GenerateResumeSummaryOutputSchema = z.object({
  summary: z.string().describe('The tailored resume summary.'),
});
export type GenerateResumeSummaryOutput = z.infer<
  typeof GenerateResumeSummaryOutputSchema
>;

export async function generateResumeSummary(
  input: GenerateResumeSummaryInput
): Promise<GenerateResumeSummaryOutput> {
  return generateResumeSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResumeSummaryPrompt',
  input: {schema: GenerateResumeSummaryInputSchema},
  output: {schema: GenerateResumeSummaryOutputSchema},
  prompt: `You are a resume expert. Generate a concise summary of the following resume tailored to the job description provided.

Job Description: {{{jobDescription}}}

Resume: {{{resume}}}

Summary:`,
});

const generateResumeSummaryFlow = ai.defineFlow(
  {
    name: 'generateResumeSummaryFlow',
    inputSchema: GenerateResumeSummaryInputSchema,
    outputSchema: GenerateResumeSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
