"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);

    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoginInProgress(true);

        await signIn("credentials", { email, password, callbackUrl: "/" });
        setLoginInProgress(false);
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
                Login
            </h1>
            <form
                className="block max-w-xs mx-auto"
                onSubmit={handleLoginSubmit}
            >
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loginInProgress}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loginInProgress}
                />
                <button type="submit" disabled={loginInProgress}>
                    Login
                </button>
                <div className="my-4 text-center text-gray-500">
                    or Login with provider
                </div>
                <button
                    type="button"
                    className="flex gap-4 justify-center items-center"
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                    <Image src={"/google.png"} alt="" width={32} height={32} />
                    Login with google
                </button>
            </form>
            <div className="my-4 text-center text-gray-500 pt-4">
                Do not have an account?{" "}
                <Link
                    className="underline text-primary font-semibold"
                    href={"/register"}
                >
                    Register here &raquo;
                </Link>
            </div>
        </section>
    );
}
