import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { signUp } from "@/app/api/auth"
import { useState } from 'react';

interface FormData {
    username: string;
    password: string;
}

const SignUpForm = () => {
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
        signUp(formData)
        console.log("formData===>", formData);
        console.log("1212");
        // Handle form submission logic here
    };
    return (
        <>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
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
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/auth/login" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </>
    )
}

export default SignUpForm