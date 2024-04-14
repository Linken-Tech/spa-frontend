import { Card, Input, Button, Typography, } from "@material-tailwind/react";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { logIn } from "@/app/auth/lib/auth"
import { ROUTES } from "@/app/routes/routes"


interface FormData {
    username: string;
    password: string;
}

const LoginForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await logIn(formData).then((response: any) => {
            if (response.status === 200) {
                const userToken = response.data.access;
                localStorage.setItem('USER_TOKEN', userToken);
                router.push(ROUTES.dashboard);
            }
        }).catch(error => {
            console.error('Login failed', error.message); // Handle error
        })
    };

    return (
        <>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                    Welcome Back
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Username
                        </Typography>
                        <Input
                            size="lg"
                            placeholder=""
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="username"
                            onChange={handleInputChange}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="password"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                        sign in
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Do not have an account?{" "}
                        <Link href={ ROUTES.signUp } className="font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Card>
        </>
    )
}

export default LoginForm