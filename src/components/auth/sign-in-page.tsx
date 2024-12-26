import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";

const SignInPage = () => {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleSignIn = (platform: string) => {
    setLoadingButton(platform);
    // Add your sign-in logic here
    setTimeout(() => setLoadingButton(null), 2000);
  };

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <section className="relative hidden h-full items-center justify-center bg-white md:flex">
        <img
          src="/images/Group 37111.png"
          alt="hero"
          width={"474"}
          height={322}
          className="z-10"
        />
        <img
          src="/images/Subtract.png"
          alt="bg"
          className="absolute bottom-0 left-0 opacity-40"
        />
      </section>

      <section className="flex h-full flex-col items-center justify-center bg-[#FAFAFA] border-l border-gray-200 p-8">
        <Card className="w-full max-w-[450px] border border-gray-200">
          <CardHeader className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <img src="/images/Frame 10.png" alt="logo" className="h-8" />
            </div>
            <CardTitle className="text-[32px]">Welcome to CodeAnt AI</CardTitle>
            {/* <CardDescription>Choose your sign in method</CardDescription> */}
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="saas" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="saas">SAAS</TabsTrigger>
                <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
              </TabsList>

              <TabsContent value="saas" className="space-y-4 mt-6">
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => handleSignIn("GitHub")}
                  disabled={loadingButton === "GitHub"}
                >
                  {loadingButton === "GitHub" ? (
                    <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <FaGithub className="mr-2 h-4 w-4" />
                  )}
                  Sign in with GitHub
                </Button>
                {/* Add other SAAS buttons similarly */}
              </TabsContent>

              <TabsContent value="self-hosted" className="space-y-4 mt-6">
                <Button
                  variant="outline"
                  className="w-full h-12"
                  onClick={() => handleSignIn("GitLab")}
                  disabled={loadingButton === "GitLab"}
                >
                  {loadingButton === "GitLab" ? (
                    <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <FaGitlab className="mr-2 h-4 w-4 text-orange-500" />
                  )}
                  Self Hosted GitLab
                </Button>
                {/* Add SSO button similarly */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-600 mt-6">
          By signing up you agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default SignInPage;
