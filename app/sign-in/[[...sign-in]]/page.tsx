import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <body className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="grid place-items-center h-screen">
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
        </body>
    );
}