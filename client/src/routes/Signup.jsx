import { SignUp } from "@clerk/clerk-react";

const SignupPage = ()=>{
    return (
        <div className="flex items-center justify-center h-[cal(100vh-80pcx)]">
       <SignUp signInUrl="/login"/>
        </div>
    )
}

export default SignupPage;