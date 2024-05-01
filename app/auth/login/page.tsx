'use client';
import LoginForm from "@/app/auth/components/Forms/LoginForm";

const Login = () => {
    return (
        <>
            <div className="flex">
                <div className="w-3/5 bg-white flex items-center justify-center">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <LoginForm></LoginForm>
                    </div> 
                </div>
                <div className="w-2/5 h-[550px] bg-green-900 rounded-bl-2xl relative overflow-hidden">
                    <img className="absolute w-full h-96 object-cover transform" src="/assests/signup-bg-pattern.png"></img>
                    <img className="absolute w-full h-96 mt-44 object-cover transform" src="/assests/signup-bg-pattern2.png"></img>
                </div>
            </div>
        </>
    )
}

export default Login