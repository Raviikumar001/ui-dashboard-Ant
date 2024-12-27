import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router";
const SignInPage = () => {
  const navigate = useNavigate();

  const redirectTo = () => {
    return navigate("/dashboard");
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

      <section className="flex h-full flex-col items-center justify-center bg-[#FAFAFA] border-l border-gray-200 p-8 w-full">
        <Card className="w-full max-w-[800px] md:max-w-[600px]  h-[600px] md:h-[500px]  border border-gray-200">
          <CardHeader className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/images/Frame 10.png" alt="logo" className="h-8" />
            </div>
            <CardTitle className="text-2xl md:text-[32px]">
              Welcome to CodeAnt AI
            </CardTitle>
          </CardHeader>

          <CardContent className="w-full p-0">
            {" "}
            {/* Remove default padding */}
            <div className="">
              {" "}
              {/* Add padding to the content we want padded */}
              <Tabs defaultValue="saas" className="w-full">
                <div className="px-6">
                  <TabsList className="rounded-xl w-full flex items-center mt-2 border border-gray-200 p-0 h-12">
                    <TabsTrigger
                      value="saas"
                      className="rounded-xl w-full h-full transition-colors font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-50 data-[state=active]:hover:bg-blue-600"
                    >
                      SAAS
                    </TabsTrigger>
                    <TabsTrigger
                      value="self-hosted"
                      className="rounded-xl w-full h-full transition-colors font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-gray-50 data-[state=active]:hover:bg-blue-600"
                    >
                      Self Hosted
                    </TabsTrigger>
                  </TabsList>
                </div>

                <Separator className="my-6 bg-gray-200 w-full" />
                <div className="px-6">
                  {/* Add padding to the content we want padded */}
                  <TabsContent value="saas" className="space-y-4 mt-6">
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <FaGithub className="text-xl" />
                      Sign in with GitHub
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <FaBitbucket className="text-xl text-blue-500" />
                      Sign in with BitBucket
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <VscAzureDevops className="text-xl text-blue-600" />
                      Sign in with Azure Devops
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <FaGitlab className="text-orange-500 text-xl" />
                      Sign in with GitLab
                    </Button>
                    {/* Add other SAAS buttons similarly */}
                  </TabsContent>

                  <TabsContent value="self-hosted" className="space-y-4 mt-6">
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <FaBitbucket className="mr-2 h-4 w-4 text-orange-500" />
                      Self Hosted GitLab
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-gray-300 font-semibold"
                      onClick={() => redirectTo()}
                    >
                      <IoKeyOutline className="text-xl" />
                      Self Hosted SSO
                    </Button>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-gray-600 mt-6">
          By signing up you agree to the{" "}
          <a href="#" className="font-bold text-gray-800 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default SignInPage;
