import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";

const SignInPage = () => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <img src="/svg/logo.svg" alt="logo" />
            <CardTitle className="pt-3 ">CodeAnt AI</CardTitle>
          </div>
          <CardDescription>Welcome to CodeAnt AI</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="">
            <TabsList className="grid w-full grid-cols-2 rounded-lg">
              <TabsTrigger className=" bg-[#2563eb] text-white" value="account">
                SAAS
              </TabsTrigger>
              <TabsTrigger className="rounded-xl" value="password">
                Self Hosted
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <button>Signin with github</button>
            </TabsContent>
            <TabsContent value="account">
              <button>Signin with github</button>
            </TabsContent>
            <Separator className="my-2" />
            <div>hhh</div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
