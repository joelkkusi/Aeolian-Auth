import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="grid place-items-center h-screen">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
}
