import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common-form";
import { signUpFormControls, signInFormControls } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("sign-in");

  //functions
  function handleTabChange(value) {
    setActiveTab(value);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="w-8 h-8 mr-4" />
          <span>LMS Learn</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="sign-in"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin"> Sign In </TabsTrigger>
            <TabsTrigger value="signup"> Sign Up </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign In to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to sign in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommonForm formControls={signInFormControls} buttonText={'Sign In'} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
          <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
              <CommonForm formControls={signUpFormControls} buttonText={'Sign Up'} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;