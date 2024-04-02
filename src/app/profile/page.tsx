"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Profile() {
    const session = useSession();
    const { status } = session;
    const [userName, setUserName] = useState(session.data?.user?.name || "");

    if (status === "loading") {
        return "Loading...";
    }

    if (status === "unauthenticated") {
        return redirect("/login");
    }

    const userImage = session.data?.user?.image;

    const handleProfileInfoUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: userName }),
        });
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
                Profile
            </h1>
            <div className="max-w-xs mx-auto">
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-2 rounded-lg relative">
                            <Image
                                className="rounded-lg w-full h-full mb-1"
                                src={userImage || ""}
                                width={250}
                                height={250}
                                alt="avatar"
                            />
                            <button type="button">Edit</button>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input
                            type="text"
                            placeholder="First and last name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="email"
                            disabled={true}
                            value={session.data?.user?.email || ""}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
