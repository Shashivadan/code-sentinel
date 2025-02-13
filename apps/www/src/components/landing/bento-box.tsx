import React from "react";
import {
  Shield,
  ArrowRight,
  Code2,
  GitBranch,
  Globe,
  Github,
  Sparkles,
} from "lucide-react";
import { Button } from "@codesentinel/ui/components/button";

export function BentoBox() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-3 md:grid-rows-3 md:p-12 bg-black text-white">
        {/* Feature Spotlight */}
        <div className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-950 p-6 sm:p-8 transition-all">
          <div className="relative z-10">
            <Shield className="mb-4 h-8 w-8 sm:h-12 sm:w-12 text-purple-800" />
            <h3 className="mb-2 text-xl sm:text-2xl font-semibold">
              AI-Powered Analysis
            </h3>
            <p className="mb-4 text-sm sm:text-base text-zinc-400">
              Advanced machine learning algorithms analyze your code for
              security vulnerabilities, performance issues, and best practices.
            </p>
            <Button variant="link" className="group p-0 text-purple-700">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-950/20 to-transparent" />
        </div>

        {/* Stats Card */}
        <div className="overflow-hidden  bg-black">
          <div className="grid h-full grid-cols-3 gap-3">
            <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 p-4 transition-all hover:border-purple-900/50 hover:bg-zinc-900/50">
              <div className="mb-2 rounded-lg bg-purple-900/20 p-2">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                1M+
              </div>
              <div className="text-center text-[10px] sm:text-xs text-zinc-400 font-medium">
                Lines Analyzed
              </div>
            </div>

            <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 p-4 transition-all hover:border-purple-900/50 hover:bg-zinc-900/50">
              <div className="mb-2 rounded-lg bg-purple-900/20 p-2">
                <GitBranch className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-center text-[10px] sm:text-xs text-zinc-400 font-medium">
                PRs Reviewed
              </div>
            </div>

            <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-zinc-800 bg-zinc-950/50 p-4 transition-all hover:border-purple-900/50 hover:bg-zinc-900/50">
              <div className="mb-2 rounded-lg bg-purple-900/20 p-2">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-center text-[10px] sm:text-xs text-zinc-400 font-medium">
                Languages
              </div>
            </div>
          </div>
        </div>

        {/* Integration Card */}
        <div className="group relative overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-900 p-4 sm:p-6 transition-all">
          <Github className="mb-4 h-6 w-6 sm:h-8 sm:w-8 text-purple-700" />
          <h3 className="mb-2 text-base sm:text-lg font-semibold">
            GitHub Integration
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Seamlessly connects with your GitHub repositories
          </p>
        </div>

        {/* Demo Card */}
        <div className="relative md:col-span-2 overflow-hidden rounded-2xl border-2 border-zinc-800 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-transparent" />
          <div className="relative h-full p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-700" />
              <span className="text-xs sm:text-sm font-medium">Live Demo</span>
            </div>
            <div className="rounded-lg p-3 sm:p-4">
              <code className="text-xs sm:text-sm">
                <span className="text-purple-600">{">"}</span> Analyzing pull
                request...
                <br />
                <span className="text-purple-400">✓</span> Security check passed
                <br />
                <span className="text-purple-500">⚠</span> Performance
                optimization suggested
                <br />
                <span className="text-purple-600">ℹ</span> Code style
                improvements found
              </code>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="overflow-hidden rounded-2xl border-2 border-zinc-800 bg-gradient-to-br from-purple-950/30 to-black p-6 sm:p-8">
          <div className="flex h-full flex-col items-start justify-between">
            <h3 className="text-lg sm:text-xl font-semibold">
              Ready to get started?
            </h3>
            <div className="mt-4">
              <Button
                size="lg"
                className="gap-2 bg-purple-900 hover:bg-purple-800 text-sm sm:text-base"
              >
                Try CodeSentinels Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
