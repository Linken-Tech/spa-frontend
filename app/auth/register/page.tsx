import LoginSignUpForm from "@/app/ui/components/Forms/LoginForm";

const Register = () => {
    return (
        <>
            <div className="flex min-h-screen flex-col p-4">
                <div className="bg-green-900 rounded-2xl">
                    <div className="flex">
                        <div className="w-32 h-96">
                            <img className="absolute h-2/4" src="/assests/signup-bg-pattern.png"></img>
                            <img className="absolute -ml-8" src="/assests/signup-bg-pattern2.png"></img>
                        </div>
                    </div>
                </div>
                <div className="mx-auto bg-white rounded-xl shadow-md -mt-52">
                    <div className="md:flex">
                        <div className="m-8">
                            <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                                    Register
                                </h4>
                                <LoginSignUpForm buttonAction="sign up" haveAccount="Already have an Account? " formAction="Sign In" routePath="/auth/login"></LoginSignUpForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register