import { User } from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoConnect";

const handler = NextAuth({
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "test@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, _req) {
                const email = credentials?.email;
                const password = credentials?.password;

                mongoose.connect(process.env.MONGO_URL!);
                const user = await User.findOne({ email });
                console.log(user);

                if (!user) {
                    console.log(1);
                    return null;
                }

                const verifyPassword = await bcrypt.compare(
                    password!,
                    user.password
                );

                if (!verifyPassword) {
                    console.log(2);
                    return null;
                }

                console.log(3);
                return user;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
