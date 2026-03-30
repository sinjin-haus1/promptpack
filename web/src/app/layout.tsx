import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ApolloWrapper } from '@/lib/apollo-provider';
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptPack - Vibe Coding Prompt Library",
  description: "Personal library for vibe coding prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ApolloWrapper>
              {children}
            </ApolloWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
