import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: 'signalist-stocks-tracker-app-main',
    ai: { gemini: {apiKey: process.env.GEMINI_API_KEY! }}
})

