import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/auth/lib/Auth"
import { useState } from 'react';
import { ROUTES } from "@/app/routes/routes"
import { signUpFormData, emptyProps } from "@/app/definition/definition";

const SignUpForm: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<signUpFormData>({
        username: '',
        password: ''
    });
    const passEmptyProps = (): emptyProps => {
        return {
            placeholder: "",
            onPointerEnterCapture: () => {},
            onPointerLeaveCapture: () => {}
        };
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signUp(formData).then((response: any) => {
            if (response.status === 200) {
                router.push(ROUTES.dashboard)
            }
        }).catch((error: any) => {
            console.error('Sign up failed:', error.message);
        })
    };
    return (
        <>
            <Card color="transparent" shadow={false} {...passEmptyProps()}>
                <Typography variant="h4" color="blue-gray" {...passEmptyProps()}>
                    Sign Up
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3" {...passEmptyProps()}>
                            Username
                        </Typography>
                        <Input
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="username"
                            onChange={handleInputChange}
                            {...passEmptyProps()}
                            crossOrigin=""
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="password"
                            onChange={handleInputChange}
                            {...passEmptyProps()}
                            crossOrigin=""
                            placeholder="********"
                            required
                        />
                    </div>
                    <Button className="mt-6" type="submit" fullWidth {...passEmptyProps()}>
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal" {...passEmptyProps()}>
                        Already have an account?{" "}
                        <a href={ROUTES.login} className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </>
    )
}

export default SignUpForm