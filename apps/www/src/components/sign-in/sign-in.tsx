"use client";
import { Button } from "@codesentinel/ui/components/button";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { signIn } from "@/src/lib/auth-client";

export function SignIn() {
  return (
    <div className="w-full relative h-screen bg-gradient-to-tr from-zinc-950 to-zinc-950 ">
      <div className="w-full h-full absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full absolute inset-0 flex justify-center items-center"
        >
          <Button
            variant={"ghost"}
            className="absolute left-8 top-8 border-[1px] rounded-xl"
            onClick={() => {
              window.history.back();
            }}
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            back
          </Button>
          <div className="bg-zinc-950 rounded-lg shadow-lg p-8 w-96">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Sign In</h2>
              <div className="space-x-2">
                <Button
                  onClick={async () => {
                    await signIn.social({
                      provider: "github",
                      callbackURL: "/mail",
                    });
                  }}
                  className="w-full p-6 rounded-xl opacity-50 hover:opacity-100 transition-all"
                >
                  <Github className="h-6 w-6 mr-2" />
                  Sign in with Github
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
