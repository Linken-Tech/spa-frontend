'use client';
import SignUpForm from "@/app/auth/components/Forms/SignUpForm";

const Register = () => {
    return (
        <>
            <div className="flex flex-col p-4">
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
                                <SignUpForm></SignUpForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register