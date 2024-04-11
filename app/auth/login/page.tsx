import LoginSignUpForm from "@/app/ui/components/Forms/LoginForm";

const Login = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-3/5 bg-white flex items-center justify-center">
                    <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                            Welcome Back
                        </h4>
                        <LoginSignUpForm buttonAction="sign in" haveAccount="Don't have an account? " formAction="Sign Up"></LoginSignUpForm>
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